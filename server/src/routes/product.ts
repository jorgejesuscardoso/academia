import { Request, Response } from 'express';
import ProductControllers from '../controllers/product/product.controller';

const express = require('express');

const router = express.Router();

const product = new ProductControllers();

router.get('/products', async (req: Request, res: Response) => {
  await product.getProduct(req, res);
});

export default router;