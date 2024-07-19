import { PrismaClient } from '@prisma/client';
class SearchService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async UserSearchId(id: number) {
    const user = await this.prisma.user.findMany({
      where: {
        id
      }
    });
    return user;
  }

  async UserSearchEmail(email: string) {
    const user = await this.prisma.user.findMany({
      where: {
        email: {
          contains: email
        }
      }
    });
    return user;
  }

  async UserSearchTelefone(telefone: string) {
    const user = await this.prisma.user.findMany({
      where: {
        telefone: {
          contains: telefone
        }
      }
    });
    return user;
  }

  async UserSearchNome(nome: string) {
    const user = await this.prisma.user.findMany({
      where: {
        nome: {
          contains: nome
        }
      }
    });
    return user;
  }
  
  async PlanosSearchId(id: number) {
    const planos = await this.prisma.plano.findMany({
      where: {
        id
      }
    });
    return planos;
  }  

  async PlanosSearchNome(value: string) {
    const planos = await this.prisma.plano.findMany({
      where: {
        nome: {
          contains: value
        }
      }
    });
    return planos;
  }

  async ClienteSearchId(id: number) {
    const cliente = await this.prisma.cliente.findMany({
      where: {
        id
      }
    });
    return cliente;
  }

  async ClienteSearchNome(value: string) {
    const cliente = await this.prisma.cliente.findMany({
      where: {
        nome: {
          contains: value
        }
      }
    });
    return cliente;
  }

  async ClienteSearchEmail(value: string) {
    const cliente = await this.prisma.cliente.findMany({
      where: {
        email: {
          contains: value
        }
      }
    });
    return cliente;
  }

  async ClienteSearchTelefone(value: string) {
    const cliente = await this.prisma.cliente.findMany({
      where: {
        telefone: {
          contains: value
        }
      }
    });
    return cliente;
  }

  async InstrutorSearchId(id: number) {
    const instrutor = await this.prisma.instrutor.findMany({
      where: {
        id
      }
    });
    return instrutor;
  }

  async InstrutorSearchNome(value: string) {
    const instrutor = await this.prisma.instrutor.findMany({
      where: {
        nome: {
          contains: value
        }
      }
    });
    return instrutor;
  }

  async InstrutorSearchEmail(value: string) {
    const instrutor = await this.prisma.instrutor.findMany({
      where: {
        email: {
          contains: value
        }
      }
    });
    return instrutor;
  }

  async InstrutorSearchTelefone(value: string) {
    const instrutor = await this.prisma.instrutor.findMany({
      where: {
        telefone: {
          contains: value
        }
      }
    });
    return instrutor;
  }
}

export default SearchService;
