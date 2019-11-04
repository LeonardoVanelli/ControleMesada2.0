import Assignment from '../models/Assignment';
import FamilyAssignments from '../models/FamilyAssignments';
import Family from '../models/Family';

class AssignmentController {
  async store(req, res) {
    const { familyId } = req.body;

    const existentFamily = await Family.findByPk(familyId);

    if (!existentFamily) {
      return res.status(400).json({ error: 'Family does not exist' });
    }

    const { id, name, value } = await Assignment.create(req.body);

    FamilyAssignments.create({
      assignment_id: id,
      family_id: familyId,
    });

    return res.json({ id, name, value });
  }

  async show(req, res) {
    const { familyId } = req.query;

    const assignments = await Assignment.findAll({
      attributes: ['id', 'name', 'value', 'disabled'],
      include: [
        {
          model: Family,
          as: 'families',
          where: { id: familyId },
          attributes: [],
          required: true,
        },
      ],
    });

    res.json(assignments);
  }
}

export default new AssignmentController();
