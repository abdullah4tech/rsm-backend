import { Router } from 'express';
import roleMiddleware from '../middleware/roleMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { registerUser, loginUser, getUsers, deleteUser, updateUser } from '../controllers/users.controller.js';

const router = Router();


router.post('/regsiter', roleMiddleware(['admin']), registerUser);
router.post('/login', roleMiddleware(['student', 'admin']), loginUser);
router.get('/', roleMiddleware(['admin']), getUsers);
router.put('/:id', roleMiddleware(['admin', 'student']), updateUser);
router.delete('/:id', roleMiddleware(['admin', 'student']), deleteUser);

export default router;


