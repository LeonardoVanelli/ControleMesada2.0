import Activity from '../models/Activity';

class ActivityController {
  async store(req, res) {
    const { id, realized_date: realizedDate } = await Activity.create(req.body);

    return res.json({ id, realizedDate });
  }
}

export default new ActivityController();
