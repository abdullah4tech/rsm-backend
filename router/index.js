import { Router } from "express";
import batchesRoute from '../router/batches.routes.js';
import lecturersRoute from '../router/lecturers.routes.js';
import studentsRoute from '../router/students.routes.js';
import resourcesRoute from '../router/resources.routes.js';

const router = Router();

router.use('/batches', batchesRoute);
router.use('/lecturers', lecturersRoute);
router.use('/students', studentsRoute);
router.use('/resources', resourcesRoute);

export default router;
