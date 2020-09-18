import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import authenticate from './app/middlewares/authenticate';
import AnimalController from './app/controllers/AnimalController';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);

/*
 * Private route
 */

router.use(authenticate);

router.put('/auth/user', UserController.update);
router.delete('/auth/user', UserController.delete);

router.post('/auth/animal', AnimalController.store);
router.get('/auth/animal', AnimalController.show);

export default router;
