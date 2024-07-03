import { Request, Response } from 'express';
import EventoController from '../controllers/evento/Evento.controller';
import multer = require('multer');
const path = require('path');
const fs = require('fs');

const express = require('express');

const router = express.Router();

const Evento = new EventoController();


const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    const dir = 'uploads/evento';
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
router.post('/eventos', upload.single('imagem') ,(req: Request, res: Response) => Evento.createEvento(req, res));

router.get('/eventos', (req: Request, res: Response) => Evento.getEventos(req, res));

router.get('/eventos/:id', (req: Request, res: Response) => Evento.getEventoById(req, res));

router.put('/eventos/:id', (req: Request, res: Response) => Evento.updateEvento(req, res));

router.delete('/eventos/:id', (req: Request, res: Response) => Evento.deleteEvento(req, res));

export default router;