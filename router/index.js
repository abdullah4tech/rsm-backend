import { Router } from "express";

const router = Router();

router.use('/batches', require('../router/batches.routes'));
router.use('/lecturers', require('../router/lecturers.routes'));
router.use('/students', require('../router/students.routes'));
router.use('/resources', require('../router/resources.routes'));

export default router;