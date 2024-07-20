import { PrismaClient } from '@prisma/client';

class Purchase {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getPurchase(data: any) {
    const purchase = await this.prisma.purchase.findMany();

    return purchase;
  }
}