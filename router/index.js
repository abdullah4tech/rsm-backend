import { Router } from "express";

const router = Router();

router.use('/batches', require('../router/batches.routes.js'));
router.use('/lecturers', require('../router/lecturers.routes.js'));
router.use('/students', require('../router/students.routes.js'));
router.use('/resources', require('../router/resources.routes.js'));

export default router;