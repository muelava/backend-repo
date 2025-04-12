import express from 'express';
import { getUserData, updateUserData } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/fetch-user-data', authMiddleware, getUserData);
router.post('/update-user-data', authMiddleware, updateUserData);

export default router;
