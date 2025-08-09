import express  from 'express';
import { getUserInfo } from '../controllers/user';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('', authMiddleware, getUserInfo);

export default router;