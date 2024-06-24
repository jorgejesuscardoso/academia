import { Request, Response } from 'express';
import AuthController from '../auth/Auth.controller';
const express = require('express');

const router = express.Router();

const user = new AuthController();

router.post('/login', async (req: Request, res: Response) => {
  await user.login(req, res);
});

router.post('/register', async (req: Request, res: Response) => {
  await user.register(req, res);
});

router.get('/users', async (req: Request, res: Response) => {
  await user.getUsers(req, res);
});

router.get('/user/:userId', async (req: Request, res: Response) => {
  await user.getUserById(req, res);
});

router.put('/user/:userId', async (req: Request, res: Response) => {
  await user.updateUser(req, res);
});

router.delete('/user/:userId', async (req: Request, res: Response) => {
  await user.deleteUser(req, res);
});

export default router;