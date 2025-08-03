import { Request, Response, NextFunction } from 'express';
import { UserPayload, verifyToken } from '../utils/jwt';

export interface AuthRequest extends Request {
  user?: UserPayload;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeaders = req.headers['authorization'];
  console.log('authHeaders', authHeaders);
  if(!authHeaders) {
    res.status(401).send({ message: 'Authorization header missing' })
  }
  const token = authHeaders?.substring(7);

  if (!token) {
    res.status(401).send({ message: 'Missing token' });
    return;
  }

  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).send({ message: 'Invalid or expired token' });
    return;
  }

  req.user = payload;
  next();
}