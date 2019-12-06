import { startOfWeek, endOfWeek } from 'date-fns';

import Activity from '../models/Activity';
import Assignment from '../models/Assignment';
import Family from '../models/Family';
import User from '../models/User';

class ActivityIndexService {
  async run({ familyId, page }) {
    const activities = await Activity.findAll({
      order: [['createdAt', 'DESC']],
      attributes: ['id', 'realized_date', 'createdAt'],
      limit: 10,
      offset: 10 * page || 0,
      subQuery: false,
      include: [
        {
          model: Assignment,
          as: 'assignment',
          attributes: ['id', 'name', 'value'],
          required: true,
          include: [
            {
              model: Family,
              as: 'families',
              where: { id: familyId },
              attributes: [],
              required: true,
            },
          ],
        },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });

    const start = startOfWeek(new Date());
    const end = endOfWeek(new Date());

    const [query] = await Activity.sequelize.query(
      `SELECT SUM(ass.value)
         FROM activities ac
        INNER JOIN assignments ass ON ass.id = ac.assignment_id
        INNER JOIN family_assignments fa ON fa.family_id = ${familyId} AND fa.assignment_id = ass.id
        where ac.realized_date between '${start.toUTCString()}' and '${end.toUTCString()}'
        `
    );

    const amount = query[0].sum;

    return { activities, amount };
  }
}

export default new ActivityIndexService();
