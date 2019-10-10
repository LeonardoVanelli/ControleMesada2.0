import { Router } from 'express';

import User from './app/models/User';

const router = Router();

router.post('/user', async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({
    name,
    email,
  });
  return res.json(user);
});

export default router;
