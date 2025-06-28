import express from 'express';
import getTask from '../controllers/task';

const router = express.Router();

router.get('/', getTask);

export default router;