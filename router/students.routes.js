import { Router } from 'express';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../controllers/students.controller.js';


const router = Router();

// Admin and lecturers can access student data
router.post('/', roleMiddleware(['admin']), createStudent);
router.get('/', roleMiddleware(['admin', 'lecturer']), getStudents);
router.put('/:id', roleMiddleware(['admin']), updateStudent);
router.delete('/:id', roleMiddleware(['admin']), deleteStudent);


export default router;
