import { Request, Response } from 'express';
import { hashPassword, comparePassword } from '../utils/password';
import { generateJwtToken, UserPayload, verifyToken } from '../utils/jwt';
import User, { IUser }  from '../models/User';


export async function register (req: Request, res: Response): Promise<void> {
    try {
        const { username, password, role } = req.body;

        if (!username || !password || !role ) {
            res.status(400).json({ error: 'all fields are required' });
            return;
        }

        const hashPass = await hashPassword(password);

        const newUser: IUser = new User({ username, password: hashPass, role });  
        await newUser.save();
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

export async function getPayload(token: string): Promise<UserPayload | null> {
    try {
        const userPayload = verifyToken(token);
        console.log('in getPayload', userPayload);
        return userPayload;
    } catch (error) {
        console.log(error);
        return null;
    }
}