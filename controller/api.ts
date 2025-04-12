import { Request, Response } from 'express';
import { fetchUser, updateUser } from '../repository/userCollection';

export const getUserData = async (req: Request, res: Response) => {
  const uid = (req as any).user.uid;
  const user = await fetchUser(uid);

  if (user) res.json(user);
  else res.status(404).json({ error: 'User not found' });
};

export const updateUserData = async (req: Request, res: Response) => {
  const uid = (req as any).user.uid;
  const data = req.body;

  await updateUser(uid, data);
  res.json({ message: 'User updated' });
};
