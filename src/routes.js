import { Router } from 'express';

import UserController from './app/controllers/UserController';

import ValidateUserStore from './app/Validators/UserStore';

const router = Router();

router.post('/user', ValidateUserStore, UserController.store);

export default router;
