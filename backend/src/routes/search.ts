import { Request, Response } from 'express';
import SearchController from '../search/Search.controller';
const express = require('express');

const router = express.Router();

const search = new SearchController();

router.get('/search/plano', search.PlanosSearch);
router.get('/search/user', search.UserSearch);
router.get('/search/cliente', search.ClienteSearch);
router.get('/search/instrutor', search.InstrutorSearch);

export default router;