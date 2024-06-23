import { PrismaClient } from '@prisma/client';
import { CreateClienteDTO } from '../../DTO/cliente';
import plano from '../plano/Plano.service';
import { PlanoDTO } from '../../DTO/plano';
import DataPorTipoDePlano from '../../helpers/dateForPlan';
import { ClientesMaisPlanos } from '../../helpers/response';

class ClienteService {
  private prisma: PrismaClient;
  private planoService: plano;

  constructor() {
    this.prisma = new PrismaClient();
    this.planoService = new plano();
  }

  async CreateCliente(cliente: CreateClienteDTO) {
    const plano = await this.planoService.GetPlanoById(cliente.planoId);

    const endDate = DataPorTipoDePlano(cliente, plano);

    const newCliente = await this.prisma.cliente.create({
      data: {
        nome: cliente.nome,
        email: cliente.email,
        telefone: cliente.telefone,
        dataNascimento: new Date(cliente.dataNascimento),
        dataInicio: new Date(cliente.dataInicio),
        vencimento: new Date(endDate),
        planoId: cliente.planoId,
      }
    });

    const reponseData = ClientesMaisPlanos(newCliente, plano);

    return reponseData;
  }

  async GetClientes() {
    const clientes = await this.prisma.cliente.findMany();
    const planType = await this.planoService.GetPlanos();

    const response = clientes.map(cliente => {
      const plano = planType.find(plano => plano.id === cliente.planoId);
      return ClientesMaisPlanos(cliente, plano);
    });

    return response;  
  }

  async GetClienteById(id: number) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        id,
      },
    });
    const planType = await this.planoService.GetPlanos();

    if (cliente) {
      const plano = planType.find(plano => plano.id === cliente.planoId);
      const response = ClientesMaisPlanos(cliente, plano);
      return response;
    }

    return cliente;
  }

  async GetClienteByName(nome: string) {
    const cliente = await this.prisma.cliente.findMany({
      where: {
        nome: {
          contains: nome,
        }
      },
    });

    if (cliente) {
      const planType = await this.planoService.GetPlanos();

      const response = cliente.map(cliente => {
        const plano = planType.find(plano => plano.id === cliente.planoId);
        return ClientesMaisPlanos(cliente, plano);
      });

      return response;
    }

    return cliente;
  }

  async GetClienteByEmail(email: string) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        email,
      },
    });

    if (cliente) {
      const planType = await this.planoService.GetPlanos();
      const plano = planType.find(plano => plano.id === cliente.planoId);
     
      const response = ClientesMaisPlanos(cliente, plano);
      return response;
    }

    return cliente;
  } 

  async UpdateCliente(id: number, data: CreateClienteDTO) {
    const cliente = await this.prisma.cliente.update({
      where: {
        id,
      },
      data,
    });

    if (cliente) {
      const planType = await this.planoService.GetPlanos();
      const plano = planType.find(plano => plano.id === cliente.planoId);
     
      const response = ClientesMaisPlanos(cliente, plano);

      return response;
    }

    return cliente;
  }

  async DeleteCliente(id: number): Promise<void> {
    await this.prisma.cliente.delete({
      where: {
        id,
      },
    });

    return;
  }
}

export default ClienteService;
