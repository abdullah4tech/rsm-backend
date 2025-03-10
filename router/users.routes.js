import { Router } from 'express';
import roleMiddleware from '../middleware/roleMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { registerUser, loginUser, getUsers, deleteUser, updateUser } from '../controllers/users.controller.js';

const router = Router();


router.post('/regsiter', roleMiddleware(['sudo']), registerUser);
router.post('/login', roleMiddleware(['student', 'admin', 'sudo']), loginUser);
router.get('/', roleMiddleware(['sudo']), getUsers);
router.put('/:id', roleMiddleware(['admin', 'student', 'sudo']), updateUser);
router.delete('/:id', roleMiddleware(['admin', 'student', 'sudo']), deleteUser);

export default router;


