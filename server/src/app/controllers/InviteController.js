import Invite from '../../lib/Invite';
import User from '../models/User';
import Family from '../models/Family';
import Queue from '../../lib/Queue';
import InvitationMail from '../jobs/InvitationMail';

class InviteController {
  async store(req, res) {
    const { familyId, email } = req.body;

    const family = await Family.findByPk(familyId, {
      attributes: ['id', 'name'],
    });
    if (!family) {
      return res.status(400).json({ error: 'Family does not exist' });
    }

    const key = await Invite.create({ familyId });

    const provider = await User.findByPk(req.userId, {
      attributes: ['name'],
    });

    await Queue.add(InvitationMail.key, {
      family,
      email,
      url: `controlemesada://controlemesada/invite/${key}`,
      provider,
    });

    return res.json({
      ok: true,
    });
  }
}

export default new InviteController();
