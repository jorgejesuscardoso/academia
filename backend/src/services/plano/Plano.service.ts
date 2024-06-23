import { PrismaClient } from '@prisma/client';
import { PlanoDTO, CreatePlanoDTO } from '../../DTO/plano';
import { ClienteDTO } from '../../DTO/cliente'; 
import { PlanosMaisCliente } from '../../helpers/response';
import { response } from 'express';

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

    const response = { ...data, clientes: PlanosMaisCliente(data) };

    return response;
  }

  async GetPlanos() {
    const data = await this.prisma.plano.findMany({
      include: { clientes: true }
    });

    const response = data.map(plano => {
      const { clientes, ...planoData } = plano;
      const dataClient = clientes.map(cliente => PlanosMaisCliente(cliente));

      return { ...planoData, clientes: dataClient };
    });
    
    return response;
  }

  async GetPlanoById(id: number) {
    const data = await this.prisma.plano.findUnique({
      where: { id },
      include: { clientes: true }
    });

    const response = { ...data, clientes: data && data.clientes.map(cliente => PlanosMaisCliente(cliente))};
    return response;
  }

  async UpdatePlano(id: number, { nome, valor, clientes }: PlanoDTO) {

    const data = await this.prisma.plano.update({
      where: { id },
      data: {
        id,
        nome,
        valor
      }
    });

    const response = { ...data, clientes: PlanosMaisCliente(data) };

    return response;
  }
  
  async DeletePlano(id: number) {
    const data = await this.prisma.plano.delete({
      where: { id }
    });

    return data;
  }
}

export default PlanoService;
