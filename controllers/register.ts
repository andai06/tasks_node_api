import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword } from '../utils/password';

import { User } from '../models/User';

export async function register (req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ error: 'Username and password are required' });
        }

        const hashPass = await hashPassword(password);
        const id = uuidv4();
        const user: User = { id, username, password: hashPass };
        console.log(user);
        res.status(201).send({user})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}