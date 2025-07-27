// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

// Étendre l'interface Request d'Express pour y ajouter l'utilisateur décodé
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; username: string };
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  // Le token est généralement envoyé sous la forme "Bearer TOKEN_VALUE"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé. Token non fourni.' });
  }

  const decodedUser = verifyToken(token);

  if (!decodedUser) {
    return res.status(403).json({ message: 'Token invalide ou expiré.' });
  }

  req.user = decodedUser; // Attacher les infos utilisateur à l'objet Request
  next(); // Passer au prochain middleware ou à la fonction de route
};