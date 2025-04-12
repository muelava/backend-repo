import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: 'https://prokoin-wedding-default-rtdb.firebaseio.com',
  });
}

const db = admin.firestore();

export { admin, db };
