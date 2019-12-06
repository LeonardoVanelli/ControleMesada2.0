import { startOfDay, startOfWeek, endOfWeek, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import Activity from '../models/Activity';
import Assignment from '../models/Assignment';

class ActivityShowService {
  async run({ userId, date }) {
    const where = { user_id: userId };
    if (date) {
      where.realized_date = startOfDay(parseISO(date));
    } else {
      where.realized_date = {
        [Op.between]: [
          startOfWeek(new Date(), { weekStartsOn: 1 }),
          endOfWeek(new Date()),
        ],
      };
    }

    const activities = await Activity.findAll({
      where,
      order: ['realized_date'],
      attributes: ['id', 'realized_date'],
      include: [
        {
          model: Assignment,
          as: 'assignment',
          attributes: ['id', 'name', 'value'],
        },
      ],
    });

    return activities;
  }
}

export default new ActivityShowService();
