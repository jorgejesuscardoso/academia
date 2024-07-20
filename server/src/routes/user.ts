import { Request, Response } from 'express';
import AuthController from '../auth/Auth.controller';
import multer = require('multer');
const path = require('path');
const fs = require('fs');

const express = require('express');

const router = express.Router();

const user = new AuthController();

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    const dir = 'uploads/foto';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },

  filename: (req, file, cb) => {
    const id = req.params.id;
    const extension = path.extname(file.originalname);

    const newfilename = `foto-${id}-${Date.now()}${extension}`;
    cb(null, newfilename);
  }
});

const upload = multer({ storage: storage });

router.post('/login', async (req: Request, res: Response) => {
  await user.login(req, res);
});

router.post('/usuarios/foto/:id',
  upload.single('foto'),
  (req: Request, res: Response) => {
  user.foto(req, res);
});

router.post('/usuarios', async (req: Request, res: Response) => {
  await user.register(req, res);
});

router.get('/usuarios', async (req: Request, res: Response) => {
  await user.getUsers(req, res);
});

router.get('/usuarios/:userId', async (req: Request, res: Response) => {
  await user.getUserById(req, res);
});

router.put('/usuarios/:userId', async (req: Request, res: Response) => {
  await user.updateUser(req, res);
});

router.delete('/usuarios/:userId', async (req: Request, res: Response) => {
  await user.deleteUser(req, res);
});

export default router;