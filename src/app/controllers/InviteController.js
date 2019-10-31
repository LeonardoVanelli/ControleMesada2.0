import Invite from '../../lib/Invite';
import FamilyUsers from '../models/FamilyUsers';
import User from '../models/User';
import Family from '../models/Family';

class InviteController {
  async store(req, res) {
    const { familyId, userId } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const family = await Family.findByPk(familyId);
    if (!family) {
      return res.status(400).json({ error: 'Family does not exist' });
    }

    const familyUser = await FamilyUsers.findOne({
      where: { family_id: familyId, user_id: userId },
    });
    if (familyUser) {
      return res.status(400).json({ error: 'User is already in this family' });
    }

    const key = await Invite.create({ familyId, userId });

    return res.json({
      url: `controlemesada://controlemesada/invite/${key}`,
    });
  }
}

export default new InviteController();
