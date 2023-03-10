import express from 'express'
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    updateTokenUser,
    deleteUser
} from "../controllers/UserController.js";

import { verifyUser,adminOnly } from '../middleware/AuthUser.js';

const router = express.Router()

router.get('/users',verifyUser,adminOnly, getUsers);
router.get('/users/:id',verifyUser,adminOnly,  getUserById);
router.post('/users',  createUser);
router.patch('/users/:id', verifyUser,adminOnly, updateUser);
router.patch('/update/:id',verifyUser,adminOnly, updateTokenUser);
router.delete('/users/:id', verifyUser,adminOnly,  deleteUser);

export default router;