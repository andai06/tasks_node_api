import {Response} from 'express';
import { AuthRequest } from '../middleware/authMiddleware';

export async function getUserInfo(req: AuthRequest, res: Response): Promise<void> {
    if(!req.user) {
        res.status(401).send('Unauthorized')
    }
    
    res.json({
    message: "User data retrieved",
    user: req.user
  });
}
