import { Router } from 'express';

import authMiddleware from './app/middleware/auth';
import providerMiddleware from './app/middleware/provider';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AssignmentController from './app/controllers/AssignmentController';
import ActivityController from './app/controllers/ActivityController';
import ClosureController from './app/controllers/ClosureController';
import CardController from './app/controllers/CardController';
import FamilyController from './app/controllers/FamilyController';
import FamilyMemberController from './app/controllers/FamilyMemberController';
import InviteController from './app/controllers/InviteController';

import ValidateUserStore from './app/Validators/UserStore';
import ValidateAssignmentStore from './app/Validators/AssignmentStore';
import ValidateActivityStore from './app/Validators/ActivityStore';
import ValidateClosureIndex from './app/Validators/ClosureIndex';
import ValidateCardIndex from './app/Validators/CardIndex';
import ValidateFamilyStore from './app/Validators/FamilyStore';
import ValidateAssignmentShow from './app/Validators/AssignmentShow';
import ValidateInviteStore from './app/Validators/InviteStore';
import ValidateFamilyMemberStore from './app/Validators/FamilyMemberStore';

const router = Router();

router.post('/user', ValidateUserStore, UserController.store);
router.post('/Session', SessionController.store);

router.use(authMiddleware);

router.get('/assignment', ValidateAssignmentShow, AssignmentController.show);

router.post('/activity', ValidateActivityStore, ActivityController.store);
router.get('/activity/:userId', ActivityController.index);

router.get('/user/:id', UserController.index);

router.get('/closure/:userId', ValidateClosureIndex, ClosureController.index);

router.post('/family', ValidateFamilyStore, FamilyController.store);
router.get('/family/:userId', FamilyController.show);

router.get('/card/:userId', ValidateCardIndex, CardController.index);

router.use(providerMiddleware);

router.post('/assignment', ValidateAssignmentStore, AssignmentController.store);

router.post('/invite', ValidateInviteStore, InviteController.store);

router.post(
  '/familymember',
  ValidateFamilyMemberStore,
  FamilyMemberController.store
);

export default router;
