import {
  startOfWeek,
  startOfDay,
  endOfDay,
  isBefore,
  isAfter,
  parseISO,
} from 'date-fns';

import Activity from '../models/Activity';

import ActivityIndexService from '../services/ActivityIndexService';

class ActivityController {
  async store(req, res) {
    // eslint-disable-next-line camelcase
    const { user_id, assignment_id } = req.body;
    // eslint-disable-next-line camelcase
    const realized_date = startOfDay(parseISO(req.body.realized_date));

    const startDateOfWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
    if (isBefore(realized_date, startDateOfWeek))
      return res.status(400).json({ error: 'Current week only' });

    if (isAfter(realized_date, endOfDay(new Date())))
      return res.status(400).json({ error: 'Day higher than current' });

    const existentActivity = await Activity.findOne({
      where: { user_id, assignment_id, realized_date: realized_date.toJSON() },
    });

    if (existentActivity) {
      return res
        .status(400)
        .json({ error: 'Activity is already registered on this day' });
    }

    const { id, realized_date: realizedDate } = await Activity.create({
      user_id,
      assignment_id,
      realized_date: realized_date.toJSON(),
    });

    return res.json({ id, realizedDate });
  }

  async index(req, res) {
    const { date } = req.query;
    const { userId } = req.params;

    const activities = await ActivityIndexService.run({
      date,
      userId,
    });

    return res.json(activities);
  }
}

export default new ActivityController();
