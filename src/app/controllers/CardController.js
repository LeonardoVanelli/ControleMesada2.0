import { startOfDay, parseISO, endOfWeek } from 'date-fns';
import { Op, col, fn } from 'sequelize';

import Activity from '../models/Activity';
import Assignment from '../models/Assignment';
import Family from '../models/Family';

class CardController {
  async index(req, res) {
    const date = startOfDay(parseISO(req.query.date));
    const { userId } = req.params;

    const activities = await Activity.findAll({
      where: {
        realized_date: date.toJSON(),
        user_id: userId,
      },
      attributes: [],
      include: [
        {
          model: Assignment,
          as: 'assignment',
          include: [
            { model: Family, as: 'families', where: { id: 1 }, attributes: [] },
          ],
          required: true,
          attributes: ['id'],
        },
      ],
    });

    const idsRealizedAssignment = activities.map(
      activity => activity.assignment.id
    );

    const realized = await Assignment.findAll({
      where: { id: idsRealizedAssignment },
      include: [
        {
          model: Family,
          as: 'families',
          where: { id: 1 },
          attributes: [],
        },
      ],
      attributes: ['id', 'name', 'value'],
    });

    const notRealized = await Assignment.findAll({
      where: { [Op.not]: { id: idsRealizedAssignment } },
      include: [
        {
          model: Family,
          as: 'families',
          where: { id: 1 },
          attributes: [],
        },
      ],
      attributes: ['id', 'name', 'value'],
    });

    const [amountWeek] = await Activity.findAll({
      where: {
        realized_date: {
          [Op.between]: [
            startOfDay(date, { weekStartsOn: 1 }),
            endOfWeek(date, { weekStartsOn: 1 }),
          ],
        },
      },
      attributes: [[fn('sum', col('assignment.value')), 'amount']],
      raw: true,
      include: [
        {
          model: Assignment,
          as: 'assignment',
          attributes: [],
        },
      ],
    });

    res.json({ realized, notRealized, amountWeek: amountWeek.amount });
  }
}

export default new CardController();
