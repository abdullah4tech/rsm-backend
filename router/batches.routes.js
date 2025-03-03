import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { createBatch, getBatches, updateBatch, deleteBatch } from '../controllers/batches.controller.js';



// Routes
router.post('/', authMiddleware, roleMiddleware(['admin']), createBatch);
router.get('/', authMiddleware, roleMiddleware(['admin', 'lecturer']), getBatches);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateBatch);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteBatch);

export default router;
