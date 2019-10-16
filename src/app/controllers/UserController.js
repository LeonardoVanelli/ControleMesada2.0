import User from '../models/User';

class UserController {
  async store(req, res) {
    const existentUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (existentUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }
}

export default new UserController();
