import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import User from '../models/User';
import Family from '../models/Family';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Family,
          as: 'families',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
      ],
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const { id, name, provider, families } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        provider,
      },
      families,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
