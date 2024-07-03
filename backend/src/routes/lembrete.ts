import { Request, Response } from 'express';
import LembreteController from '../controllers/lembrete/Lembrete.controller';
import multer = require('multer');
const path = require('path');
const fs = require('fs');

const express = require('express');

const router = express.Router();

const Lembrete = new LembreteController();


const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    const dir = 'uploads/lembrete';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },

  filename: (req, file, cb) => {
    const userId = req.body.usuarioId;
    
    const extension = path.extname(file.originalname);

    const newfilename = `evento-${userId}-${Date.now()}${extension}`;
    cb(null, newfilename);
  }
});

const upload = multer({ storage: storage });

router.post('/lembretes', 
  upload.single('imagem'),
  async (req: Request, res: Response) => Lembrete.createLembrete(req, res))
  ;
router.get('/lembretes', async (req: Request, res: Response) => Lembrete.getLembretes(req, res));
router.get('/lembretes/:id', async (req: Request, res: Response) => Lembrete.getLembreteById(req, res));
router.put('/lembretes/:id', async (req: Request, res: Response) => Lembrete.updateLembrete(req, res));
router.delete('/lembretes/:id', async (req: Request, res: Response) => Lembrete.deleteLembrete(req, res));

export default router;