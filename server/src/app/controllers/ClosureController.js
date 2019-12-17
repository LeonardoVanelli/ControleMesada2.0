/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { startOfWeek, endOfWeek, eachDayOfInterval, parseISO } from 'date-fns';

import Activity from '../models/Activity';
import Assignment from '../models/Assignment';
import User from '../models/User';
import Family from '../models/Family';

class ClosureController {
  async index(req, res) {
    const { familyId, userId } = req.query;
    const date = parseISO(req.query.date);

    const user = await User.findOne({
      where: { id: userId, provider: false },
      attributes: ['id', 'name', 'email'],
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: 'User does not exist or is provider' });
    }

    const datesOfWeek = eachDayOfInterval(
      {
        start: startOfWeek(date, { weekStartsOn: 1 }),
        end: endOfWeek(date, { weekStartsOn: 1 }),
      },
      { weekStartsOn: 1 }
    );

    const activitiesByDate = [];
    let amountOfWeek = 0;

    for (const dateOfWeek of datesOfWeek) {
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
            required: true,
            include: [
              {
                model: Family,
                as: 'families',
                required: true,
                where: { id: familyId },
                attributes: [],
              },
            ],
          },
        ],
      });

      amountOfWeek += activities.reduce(
        (accumulator, activity) => accumulator + activity.assignment.value,
        0
      );

      const activitiesOfDay = { date: dateOfWeek, activities };
      activitiesByDate.push(activitiesOfDay);
    }

    return res.json({ user, activitiesByDate, amountOfWeek });
  }
}

export default new ClosureController();
