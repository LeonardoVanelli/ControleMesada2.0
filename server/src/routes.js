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
import ValidateFamilyShow from './app/Validators/FamilyShow';
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

router.get('/closure', ValidateClosureIndex, ClosureController.index);

router.post('/family', ValidateFamilyStore, FamilyController.store);
router.get('/family/:id', FamilyController.index);
router.get('/family', ValidateFamilyShow, FamilyController.show);

router.get('/card', ValidateCardIndex, CardController.index);

router.post(
  '/familymember',
  ValidateFamilyMemberStore,
  FamilyMemberController.store
);

router.use(providerMiddleware);

router.get('/activity', ActivityController.show);

router.post('/assignment', ValidateAssignmentStore, AssignmentController.store);

router.post('/invite', ValidateInviteStore, InviteController.store);

export default router;
