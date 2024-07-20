import { PurchaseDTO } from './purchase.DTO';

export interface ProdutoDTO {
  id: number;
  name: String
  price: Number
  stored: Number
  brand: String
  purchases: PurchaseDTO[] 
}