import { Router } from "express";
import batchesRoute from '../router/batches.routes.js';
import usersRoute from './users.routes.js';
import resourcesRoute from '../router/resources.routes.js';

const router = Router();

router.use('/batches', batchesRoute);
router.use('/users', usersRoute);
router.use('/resources', resourcesRoute);

export default router;
