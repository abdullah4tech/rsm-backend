import { Router } from 'express';
// import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { createLecturer, getLecturers, updateLecturer, deleteLecturer } from '../controllers/lecturers.controller.js';

const router = Router();

// Only Admin can manage lecturers
// router.post('/', authMiddleware, roleMiddleware(['admin']), createLecturer);
// router.get('/', authMiddleware, roleMiddleware(['admin']), getLecturers);
// router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateLecturer);
// router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteLecturer);

export default router;


