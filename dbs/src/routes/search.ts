import { Request, Response } from 'express';
import SearchController from '../search/Search.controller';
import EventoController from '../controllers/evento/Evento.controller';
import LembreteController from '../controllers/lembrete/Lembrete.controller';
import PublicacaoController from '../controllers/publicacao/PublicacaoController';
const express = require('express');

const router = express.Router();

const search = new SearchController();
const evento = new EventoController();
const lembrete = new LembreteController();
const publicacao = new PublicacaoController();

router.get('/search/plano', search.PlanosSearch);
router.get('/search/user', search.UserSearch);
router.get('/search/cliente', search.ClienteSearch);
router.get('/search/instrutor', search.InstrutorSearch);


router.get('/search/publicacao', async (req: Request, res: Response) => {
  await publicacao.searchPublicacao(req, res)  });

router.get('/search/evento', async (req: Request, res: Response) => {
  await evento.searchEventos(req, res)
  });
router.get('/search/lembrete', async (req: Request, res: Response) => {
  await lembrete.searchLembretes(req, res)
  });

export default router;