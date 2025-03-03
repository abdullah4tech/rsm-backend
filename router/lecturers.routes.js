import { Router } from 'express';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { createLecturer, getLecturers, updateLecturer, deleteLecturer } from '../controllers/lecturers.controller.js';

const router = Router();

// Only Admin can manage lecturers
router.post('/', roleMiddleware(['admin']), createLecturer);
router.get('/', roleMiddleware(['admin']), getLecturers);
router.put('/:id', roleMiddleware(['admin']), updateLecturer);
router.delete('/:id', roleMiddleware(['admin']), deleteLecturer);

export default router;


