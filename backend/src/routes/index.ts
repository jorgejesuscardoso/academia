import express = require('express');
import cliente from './cliente';
import plano from './plano';

const router = express.Router();

router.use(cliente);
router.use(plano);

export default router; 