import express from 'express';
import getProjects from '../controllers/project';

const router = express.Router();

router.get('/', getProjects);

export default router;