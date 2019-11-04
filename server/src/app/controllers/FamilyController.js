import Family from '../models/Family';
import FamilyUsers from '../models/FamilyUsers';
import User from '../models/User';

class FamilyController {
  async store(req, res) {
    const existentFamily = await Family.findOne({
      where: {
        name: req.body.name,
      },
      include: [
        {
          model: User,
          as: 'users',
          where: { id: req.userId },
          required: true,
          attributes: [],
        },
      ],
    });

    if (existentFamily) {
      return res.status(400).json({
        error: 'You already have a family with this name',
      });
    }

    const family = await Family.create({
      ...req.body,
    });

    await FamilyUsers.create({
      user_id: req.userId,
      family_id: family.id,
      provider: true,
    });

    return res.json({ family });
  }
}

export default new FamilyController();
