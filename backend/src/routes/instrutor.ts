import { Request, Response } from 'express';
import InstrutorController from '../controllers/instrutores/Instrutores.controller';
const express = require('express');

const router = express.Router();

const instrutor = new InstrutorController();

router.get('/instrutor', (req: Request, res: Response) => {
  instrutor.index(req, res);
});

export default router;