import { PrismaClient } from '@prisma/client';
import { PlanoDTO, CreatePlanoDTO } from '../../DTO/plano';
import { PlanosMaisCliente } from '../../helpers/response';

class PlanoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async CreatePlano({ nome, valor, descricao }: CreatePlanoDTO) {

    const data = await this.prisma.plano.create({
      data: {
        nome,
        valor,
        descricao,
      }
    });

    const response = { ...data, clientes: PlanosMaisCliente(data) };

    return response;
  }

  async GetPlanos() {
    const data = await this.prisma.plano.findMany({
      include: { clientes: true }
    });

    const response = data.map((plano: any) => {
      const { clientes, ...planoData } = plano;
      const dataClient = clientes.map((cliente: any) => PlanosMaisCliente(cliente));

      return { ...planoData, clientes: dataClient };
    });
    
    return response;
  }

  async GetPlanoById(id: number) {
    const data = await this.prisma.plano.findUnique({
      where: { id },
      include: { clientes: true }
    });

    const response = { ...data, clientes: data && data.clientes.map((cliente: any) => PlanosMaisCliente(cliente))};
    return response;
  }

  async UpdatePlano(id: number, { nome, valor, descricao }: PlanoDTO) {

    const dataFixed = {
      nome,
      valor,
      descricao
    }

    const data = await this.prisma.plano.update({
      where: { id },
      data: {
        id,
        nome,
        valor: +valor,
        descricao
      }
    });

    const response = { ...data, clientes: PlanosMaisCliente(data) };

    return response;
  }
  
  async DeletePlano(id: number) {
    const data = await this.prisma.plano.delete({
      where: { id }
    });

    return;
  }
}

export default PlanoService;
