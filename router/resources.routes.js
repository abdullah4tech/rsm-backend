import { Router } from "express";
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { uploadResource, getResources, deleteResource } from '../controllers/resources.controller.js';

const router = Router();

// Lecturers can upload, students can only view
router.post('/', authMiddleware, roleMiddleware(['lecturer']), uploadResource);
router.get('/', authMiddleware, roleMiddleware(['admin', 'lecturer', 'student']), getResources);
router.delete('/:id', authMiddleware, roleMiddleware(['admin', 'lecturer']), deleteResource);

export default router;
