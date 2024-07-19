import { Request, Response } from 'express';
import InstrutorController from '../controllers/instrutores/Instrutores.controller';
const express = require('express');

const router = express.Router();

const instrutor = new InstrutorController();

router.post('/instrutor', (req: Request, res: Response) => {
  instrutor.CreateInstrutor(req, res);
});

router.get('/instrutor', (req: Request, res: Response) => {
  instrutor.GetInstrutores(req, res);
});

router.get('/instrutor/:id', (req: Request, res: Response) => {
  instrutor.GetInstrutorById(req, res);
});

router.get('/instrutor/nome/:nome', (req: Request, res: Response) => {
  instrutor.GetInstrutorByNome(req, res);
});

router.get('/instrutor/email/:email', (req: Request, res: Response) => {
  instrutor.GetInstrutorByEmail(req, res);
});

router.put('/instrutor/:id', (req: Request, res: Response) => {
  instrutor.UpdateInstrutor(req, res);
});

router.delete('/instrutor/:id', (req: Request, res: Response) => {
  instrutor.DeleteInstrutor(req, res);
});

export default router;