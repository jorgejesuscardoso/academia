import express = require('express');
import cliente from './cliente';
import plano from './plano';
import instrutor from './instrutor';
import user from './user';

const router = express.Router();

router.use(cliente);
router.use(plano);
router.use(instrutor);
router.use(user);

export default router; 