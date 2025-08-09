import {Response} from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import User from '../models/User';

export async function get(req: AuthRequest, res: Response): Promise<void> {
    if(!req.user) {
        res.status(401).send('Unauthorized')
    }
    
    res.json({
    message: "User data retrieved",
    user: req.user
  });
}

export async function update(req: AuthRequest, res: Response): Promise<void> {
    if(!req.user) {
        res.status(401).send('Unauthorized')
    }
    try {
        console.log('user_id', req.user?.id);
        const updatedUser = await User.findById(req.user?.id);
        if(!updatedUser) {
            res.status(404).send('User not find');
            return;
        }  
        console.log('updatedUser', updatedUser);
        console.log(req.body);
        updatedUser.username = req.body.username;
        updatedUser.save();
        console.log('after update', updatedUser);
        res.status(200).send(updatedUser)
        
    } catch (error) {
        console.log(error);
        return;
    }
}