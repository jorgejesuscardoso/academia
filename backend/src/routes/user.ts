import { Request, Response } from 'express';
import AuthController from '../auth/Auth.controller';
const express = require('express');

const router = express.Router();

const user = new AuthController();

router.post('/login', async (req: Request, res: Response) => {
  await user.login(req, res);
});

export default router;