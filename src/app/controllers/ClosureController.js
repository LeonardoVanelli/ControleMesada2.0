import { startOfWeek, endOfWeek, eachDayOfInterval, parseISO } from 'date-fns';

import Activity from '../models/Activity';
import Assignment from '../models/Assignment';
import User from '../models/User';

class ClosureController {
  async index(req, res) {
    const { userId } = req.params;
    const date = parseISO(req.query.date);

    const datesOfWeek = eachDayOfInterval(
      {
        start: startOfWeek(date, { weekStartsOn: 1 }),
        end: endOfWeek(date, { weekStartsOn: 1 }),
      },
      { weekStartsOn: 1 }
    );

    const activitiesByDate = [];
    let amountOfWeek = 0;

    datesOfWeek.map(async dateOfWeek => {
      const activities = await Activity.findAll({
        where: {
          user_id: userId,
          realized_date: dateOfWeek,
        },
        attributes: ['id'],
        include: [
          {
            model: Assignment,
            as: 'assignment',
            attributes: ['id', 'name', 'value'],
          },
        ],
      });

      amountOfWeek += activities.reduce(
        (accumulator, activity) => accumulator + activity.assignment.value,
        0
      );

      const activitiesOfDay = { date: dateOfWeek, activities };
      activitiesByDate.push(activitiesOfDay);
    });

    const user = await User.findByPk(userId, {
      attributes: ['id', 'name', 'email'],
    });

    return res.json({ user, activitiesByDate, amountOfWeek });
  }
}

export default new ClosureController();
