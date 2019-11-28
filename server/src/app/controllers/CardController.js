import { startOfDay, parseISO, endOfWeek, startOfWeek } from 'date-fns';
import { Op, col, fn } from 'sequelize';

import Activity from '../models/Activity';
import Assignment from '../models/Assignment';
import Family from '../models/Family';

class CardController {
  async index(req, res) {
    const { userId, familyId } = req.query;

    const date = startOfDay(parseISO(req.query.date));

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
            {
              model: Family,
              as: 'families',
              where: { id: familyId },
              attributes: [],
            },
          ],
          required: true,
          attributes: ['id'],
        },
      ],
    });

    const assignmentsQuery = await Assignment.findAll({
      include: [
        {
          model: Family,
          as: 'families',
          where: { id: familyId },
          attributes: [],
          required: true,
        },
      ],
      attributes: ['id', 'name'],
    });

    const assignments = assignmentsQuery.map(assignment => {
      return {
        id: assignment.id,
        name: assignment.name,
        realized: !!activities.find(
          activity => activity.assignment.id === assignment.id
        ),
      };
    });

    const queryAmounts = await Activity.findAll({
      where: {
        user_id: userId,
        realized_date: {
          [Op.between]: [
            startOfWeek(date, { weekStartsOn: 1 }),
            endOfWeek(date, { weekStartsOn: 1 }),
          ],
        },
      },
      attributes: [[fn('sum', col('assignment.value')), 'amount']],
      raw: true,
      group: [
        'assignment.id',
        'assignment.families.family_assignments.created_at',
        'assignment.families.family_assignments.updated_at',
        'assignment.families.family_assignments.family_id',
        'assignment.families.family_assignments.assignment_id',
      ],
      include: [
        {
          model: Assignment,
          as: 'assignment',
          attributes: ['id'],
          include: [
            {
              model: Family,
              as: 'families',
              where: { id: familyId },
              attributes: [],
            },
          ],
        },
      ],
    });

    let amountWeek = 0;
    if (queryAmounts) {
      amountWeek = queryAmounts.reduce(
        (accumulator, query) => accumulator + query.amount,
        0
      );
    }
    res.json({ assignments, amountWeek });
  }
}

export default new CardController();
