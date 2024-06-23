import { PrismaClient } from '@prisma/client';
import { PlanoDTO, CreatePlanoDTO } from '../../DTO/plano';
import { ClienteDTO } from '../../DTO/cliente'; 

class PlanoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async CreatePlano({ nome, valor, clientes }: CreatePlanoDTO) {
    const clienteIds = clientes.map(cliente => ({ id: cliente.id }));

    const data = await this.prisma.plano.create({
      data: {
        nome,
        valor,
        clientes: { connect: clienteIds }
      }
    });

    return data;
  }

  async GetPlanos() {
    const data = await this.prisma.plano.findMany({
      include: { clientes: true }
    });

    return data;
  }

  async GetPlanoById(id: number) {
    const data = await this.prisma.plano.findUnique({
      where: { id },
      include: { clientes: true }
    });

    return data;
  }

  async UpdatePlano(id: number, { nome, valor, clientes }: PlanoDTO) {
    const clienteIds = clientes.map(cliente => ({ id: cliente.id }));

    const data = await this.prisma.plano.update({
      where: { id },
      data: {
        nome,
        valor,
        clientes: { set: clienteIds }
      }
    });

    return data;
  }
  
  async DeletePlano(id: number) {
    const data = await this.prisma.plano.delete({
      where: { id }
    });

    return data;
  }
}

export default PlanoService;
