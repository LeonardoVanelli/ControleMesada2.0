import Invite from '../../lib/Invite';
import FamilyUsers from '../models/FamilyUsers';
import User from '../models/User';
import Family from '../models/Family';

class FamilyMember {
  async store(req, res) {
    const { key, userId } = req.body;

    const invite = await Invite.verify(key);

    if (!invite) {
      return res.status(400).json({ error: 'Invitation has expired' });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(400).json({ error: 'Invitation has expired' });
    }

    const family = await Family.findByPk(invite.familyId);
    if (!family) {
      return res.status(400).json({ error: 'Invitation has expired' });
    }

    const familyUser = await FamilyUsers.findOne({
      where: { family_id: family.id, user_id: user.id },
    });

    if (familyUser) {
      return res.status(400).json({ error: 'User is already in this family' });
    }

    await FamilyUsers.create({
      family_id: family.id,
      user_id: user.id,
      provider: user.provider,
    });

    await Invite.del(key);

    return res.json({ invite });
  }
}

export default new FamilyMember();
