import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword, comparePassword } from '../utils/password';

import { User } from '../models/User';

let hashPass: string;

export async function register (req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ error: 'Username and password are required' });
            return;
        }

        hashPass = await hashPassword(password);
        const id = uuidv4();
        const user: User = { id, username, password: hashPass };
        console.log(user);
        res.status(201).send({user})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function login(req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ error: 'Username and password are required' });
            return;
        }
        const matchPass = await comparePassword(password, hashPass);
        if(matchPass) {
            res.status(200).send({message: 'logged'});
        } else {
            res.status(400).send({message: 'bad credentials'})
        }

    } catch (error) {
        console.log(error);
    }
}