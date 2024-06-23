import express = require('express');
import cliente from './cliente';
import plano from './plano';
import instrutor from './instrutor';

const router = express.Router();

router.use(cliente);
router.use(plano);
router.use(instrutor);

export default router; 