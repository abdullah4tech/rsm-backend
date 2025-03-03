import { Router } from 'express';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { createBatch, getBatches, updateBatch, deleteBatch } from '../controllers/batches.controller.js';

const router = Router();

// Routes
router.post('/', roleMiddleware(['admin']), createBatch);
router.get('/', roleMiddleware(['admin', 'lecturer']), getBatches);
router.put('/:id', roleMiddleware(['admin']), updateBatch);
router.delete('/:id', roleMiddleware(['admin']), deleteBatch);

export default router;
