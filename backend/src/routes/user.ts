import { Request, Response } from 'express';
import AuthController from '../auth/Auth.controller';
const express = require('express');

const router = express.Router();

const user = new AuthController();

router.post('/login', async (req: Request, res: Response) => {
  await user.login(req, res);
});

router.post('/usuario', async (req: Request, res: Response) => {
  await user.register(req, res);
});

router.get('/usuario', async (req: Request, res: Response) => {
  await user.getUsers(req, res);
});

router.get('/usuario/:userId', async (req: Request, res: Response) => {
  await user.getUserById(req, res);
});

router.put('/usuario/:userId', async (req: Request, res: Response) => {
  await user.updateUser(req, res);
});

router.delete('/usuario/:userId', async (req: Request, res: Response) => {
  await user.deleteUser(req, res);
});

export default router;