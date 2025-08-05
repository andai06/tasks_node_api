import * as jwt from 'jsonwebtoken';
import { IUser } from '../models/User';

process.env.jwtSecret = 'FSDeghFQDy';

const JWT_SECRET = process.env.jwtSecret;
const JWT_EXPIRATION = "1h";

export interface UserPayload {
    id: string;
    username: string;
}

/**
 * Generate JWT for a given user.
 * @param userPayload Informations about user ton include in a token.
 * @returns Signed JWT.
 */
export function generateJwtToken(user: IUser): string {
    const payload: UserPayload = {
        id: user.id,
        username: user.username,
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION })

}

export function verifyToken(token: string): UserPayload | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as unknown as UserPayload;
        return decoded 
    } catch(e) {
        console.log(e);
        return null;
    }
}