import { Request, Response, NextFunction } from 'express';
import { admin } from '../config/firebaseConfig';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    (req as any).user = decoded;
    next(); // penting: harus return void
    return;
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }
};
