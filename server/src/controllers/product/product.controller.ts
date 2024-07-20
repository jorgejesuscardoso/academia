import { Request, Response } from 'express';
import ProductServices from '../../services/product/product.service';

class ProductControllers {
  public productService: ProductServices;

  constructor() {
    this.productService = new ProductServices();
  }

  async getProduct(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    const response = await this.productService.getProduct(page - 1, pageSize);
    
    res.status(200).json(response);
  }
}

export default ProductControllers;