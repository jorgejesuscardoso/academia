import { Request, Response } from 'express';
import ClienteController from '../controllers/cliente/Cliente.controller';
const express = require('express');

const router = express.Router();

const Cliente = new ClienteController();

router.post('/cliente', async (req: Request, res: Response) => {
  await Cliente.CreateCliente(req, res);
});

router.get('/cliente', async (req: Request, res: Response) => {
  await Cliente.GetClientes(req, res);
});

router.get('/cliente/:id', async (req: Request, res: Response) => {
  await Cliente.GetClienteById(req, res);
});

router.get('/cliente/nome/:nome', async (req: Request, res: Response) => {
  await Cliente.GetClienteByName(req, res);
});

router.get('/cliente/email/:email', async (req: Request, res: Response) => {
  await Cliente.GetClienteByEmail(req, res);
});

router.put('/cliente/:id', async (req: Request, res: Response) => {
  await Cliente.UpdateCliente(req, res);
});

router.delete('/cliente/:id', async (req: Request, res: Response) => {
  await Cliente.DeleteCliente(req, res);
});

export default router;
