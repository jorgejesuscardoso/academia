import { Request, Response } from 'express';
import PlanoController from '../controllers/plano/Plano.controller';
const express = require('express');

const router = express.Router();

const Plano = new PlanoController();

router.post('/planos', async (req: Request, res: Response) => {
  await Plano.CreatePlano(req, res);
});

router.get('/planos', async (req: Request, res: Response) => {
  await Plano.GetPlanos(req, res);
});

router.get('/planos/:id', async (req: Request, res: Response) => {
  await Plano.GetPlanoById(req, res);
});

router.put('/planos/:id', async (req: Request, res: Response) => {
  await Plano.UpdatePlano(req, res);
});

router.delete('/planos/:id', async (req: Request, res: Response) => {
  await Plano.DeletePlano(req, res);
});

export default router;