import { ClienteDTO } from './cliente';
import { ProdutoDTO } from './produto.DTO';

export interface PurchaseDTO {
  id: number;
  clientId: number;
  productId: number;
  client: ClienteDTO;
  product: ProdutoDTO;
  qtd_saled: number;
  createdAt: Date;
} 