import Assignment from '../models/Assignment';

class AssignmentController {
  async store(req, res) {
    const { id, name, value } = await Assignment.create(req.body);

    return res.json({ id, name, value });
  }
}

export default new AssignmentController();
