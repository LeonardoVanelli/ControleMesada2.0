import { Router } from 'express';

import authMiddleware from './app/middleware/auth';
import providerMiddleware from './app/middleware/provider';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AssignmentController from './app/controllers/AssignmentController';
import ActivityController from './app/controllers/ActivityController';
import ClosureController from './app/controllers/ClosureController';

import ValidateUserStore from './app/Validators/UserStore';
import ValidateAssignmentStore from './app/Validators/AssignmentStore';
import ValidateActivityStore from './app/Validators/ActivityStore';
import ValidateClosureIndex from './app/Validators/ClosureIndex';

const router = Router();

router.post('/user', ValidateUserStore, UserController.store);
router.post('/Session', SessionController.store);

router.use(authMiddleware);

router.post(
  '/assignment',
  providerMiddleware,
  ValidateAssignmentStore,
  AssignmentController.store
);

router.post('/activity', ValidateActivityStore, ActivityController.store);
router.get('/activity/:userId', ActivityController.index);

router.get('/user/:id', UserController.index);

router.get('/closure/:userId', ValidateClosureIndex, ClosureController.index);

export default router;
