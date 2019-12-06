import {
  startOfWeek,
  startOfDay,
  endOfDay,
  isBefore,
  isAfter,
  parseISO,
} from 'date-fns';

import Activity from '../models/Activity';
import Assignment from '../models/Assignment';

import ActivityIndexService from '../services/ActivityIndexService';
import ActivityShowService from '../services/ActivityShowService';

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

    const assignment = await Assignment.findByPk(assignment_id, {
      attributes: ['id', 'name', 'value'],
    });

    if (!assignment) {
      return res.status(400).json({ error: 'Assignment not found' });
    }

    if (existentActivity) {
      existentActivity.destroy();

      return res.json({ created: false, assignment });
    }

    await Activity.create({
      user_id,
      assignment_id,
      realized_date: realized_date.toJSON(),
    });

    return res.json({ created: true, assignment });
  }

  async index(req, res) {
    const { date } = req.query;
    const { userId } = req.query;

    const activities = await ActivityIndexService.run({
      date,
      userId,
    });

    return res.json(activities);
  }

  async show(req, res) {
    const { familyId, page } = req.query;

    const activities = await ActivityShowService.run({
      familyId,
      page,
    });

    return res.json(activities);
  }
}

export default new ActivityController();
