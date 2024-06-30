import express = require('express');
import cliente from './cliente';
import plano from './plano';
import instrutor from './instrutor';
import user from './user';
import search from './search';
import publicacao from './publicacao';

const router = express.Router();

router.use(cliente);
router.use(plano);
router.use(instrutor);
router.use(user);
router.use(search);
router.use(publicacao);

export default router; 