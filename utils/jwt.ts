import * as jwt from 'jsonwebtoken';

process.env.jwtSecret = 'FSDeghFQDy';
console.log(process.env);

const JWT_SECRET = process.env.jwtSecret;
const JWT_EXPIRATION = "1h";

interface UserPayload {
    id: string;
    username: string;
}

/**
 * Generate JWT for a given user.
 * @param userPayload Informations about user ton include in a token.
 * @returns Signed JWT.
 */
export function generateJwtToken(user: UserPayload): string {
    return jwt.sign(user, JWT_SECRET, { expiresIn: JWT_EXPIRATION })

}

export function verifyToken(token: string): UserPayload | null {
    try {
        const decoded = jwt.sign(token, JWT_SECRET) as unknown as UserPayload;
        return decoded 
    } catch(e) {
        console.log(e);
        return null;
    }
}