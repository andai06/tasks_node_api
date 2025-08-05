import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { hashPassword, comparePassword } from '../utils/password';
import { generateJwtToken, verifyToken } from '../utils/jwt';
import { connectDb } from '../config/database';
import User, { IUser }  from '../models/User';

connectDb();

export async function register (req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ error: 'Username and password are required' });
            return;
        }

        const hashPass = await hashPassword(password);
        const id = uuidv4();

        const newUser: IUser = new User({ id, username, password: hashPass });  
        await newUser.save();
        console.log(newUser);
        res.status(201).json({ message: "User registered successfully", user: newUser });
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
        const user = await User.findOne({username});
        console.log(user);
        if(!user) {
            res.status(404).send({msg: 'User not found'});
            return;
        }
        const isMatchPassword = await comparePassword(password, user.password);
        if(isMatchPassword) {
                const token = generateJwtToken(user);
                res.status(200).send({message: 'logged', token});
            }

    } catch (error) {
        console.log(error);
    }
}