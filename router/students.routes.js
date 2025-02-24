import { Router } from "express";
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../controllers/students.controller.js';

const router = Router();

// Admin and lecturers can access student data
router.post('/', authMiddleware, roleMiddleware(['admin']), createStudent);
router.get('/', authMiddleware, roleMiddleware(['admin', 'lecturer']), getStudents);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateStudent);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteStudent);

export default router;
