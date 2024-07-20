import { Request, Response } from 'express';
import PublicacaoController from '../controllers/publicacao/PublicacaoController';
import multer = require('multer');
const path = require('path');
const fs = require('fs'); 

const express = require('express');

const router = express.Router();

const publicacao = new PublicacaoController();


const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    const dir = 'uploads/publicacao';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },

  filename: (req, file, cb) => {
    const userId = req.body.usuarioId;
    
    const extension = path.extname(file.originalname);

    const newfilename = `publicacao-${userId}-${Date.now()}${extension}`;
    cb(null, newfilename);
  }
});

const upload = multer({ storage: storage });

router.post('/publicacao',
  upload.single('imagem'),
  (req: Request, res: Response) => {
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