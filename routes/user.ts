import express  from 'express';
import { get, update } from '../controllers/user';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('', authMiddleware, get);
router.put('', authMiddleware, update);

export default router;