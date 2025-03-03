import { Router } from 'express';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { uploadResource, getResources, deleteResource } from '../controllers/resources.controller.js';


const router = Router();

// Lecturers can upload, students can only view
router.post('/', roleMiddleware(['lecturer']), uploadResource);
router.get('/', roleMiddleware(['admin', 'lecturer', 'student']), getResources);
router.delete('/:id', roleMiddleware(['admin', 'lecturer']), deleteResource);

export default router;

