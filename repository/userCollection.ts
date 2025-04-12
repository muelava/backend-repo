import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';

const userRef = db.collection('USERS');

export const fetchUser = async (uid: string): Promise<User | null> => {
  const doc = await userRef.doc(uid).get();
  return doc.exists ? (doc.data() as User) : null;
};

export const updateUser = async (uid: string, data: Partial<User>) => {
  await userRef.doc(uid).set(data, { merge: true });
};
