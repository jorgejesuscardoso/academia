import { PrismaClient } from '@prisma/client';
import { ProdutoDTO } from '../../DTO/produto.DTO';
import { PurchaseDTO } from '../../DTO/purchase.DTO';
import { ClienteDTO } from '../../DTO/cliente';

class ProductServices {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getProduct(page: number, pageSize: number) {
    const skip = page * pageSize;
    const take = pageSize;

    const productsDetail = await this.prisma.product.findMany({
      skip: skip,
      take: take,
      include: {
        purchases: {
          include: {
            client: true, // Incluir dados do cliente em cada compra
          },
        },
      },
    });

    const productSimple = await this.prisma.product.findMany({
      skip: skip,
      take: take,
    });

    // Mapear os resultados para o formato DTO
    const productDTOs = productsDetail.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      stored: product.stored,
      brand: product.brand,
      purchases: product.purchases.map(purchase => ({
        id: purchase.id,
        clientId: purchase.clientId,
        productId: purchase.productId,
        client: {
          id: purchase.client.id,
          nome: purchase.client.nome,
          email: purchase.client.email,
          telefone: purchase.client.telefone,
          dataNascimento: purchase.client.dataNascimento,
          dataInicio: purchase.client.dataInicio,
          vencimento: purchase.client.vencimento,
          planoId: purchase.client.planoId,
          status: purchase.client.status,
          purchased: [] // Pode ser preenchido conforme necessário
        },
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          stored: product.stored,
          brand: product.brand,
          purchases: [], // Evitar circularidade
        },
        qtd_saled: purchase.qtd_saled,
        createdAt: purchase.createdAt,
      })),
    }));

    return productsDetail;
  }
}

export default ProductServices;
