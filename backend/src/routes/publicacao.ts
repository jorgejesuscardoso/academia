import { Request, Response } from 'express';
import PublicacaoController from '../controllers/publicacao/PublicacaoController';
const express = require('express');

const router = express.Router();

const publicacao = new PublicacaoController();

router.post('/publicacao', (req: Request, res: Response) => {
  publicacao.criar(req, res);
});

router.get('/publicacao', (req: Request, res: Response) => {
  publicacao.listar(req, res);
});

router.get('/publicacao/:id', (req: Request, res: Response) => {
  publicacao.listarPorId(req, res);
});

router.put('/publicacao', (req: Request, res: Response) => {
  publicacao.atualizar(req, res);
});

router.delete('/publicacao/:id', (req: Request, res: Response) => {
  publicacao.deletar(req, res);
});

export default router;