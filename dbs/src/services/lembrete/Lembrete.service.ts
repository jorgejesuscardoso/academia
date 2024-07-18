import { PrismaClient } from '@prisma/client';
import pluralize = require('pluralize');


class LembreteService {
  public prisma : PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createLembrete(data: any) {
    try {
      console.log('data',data);
      const response = await this.prisma.lembrete.create({
        data
      });
      console.log('asdadsas',response);
      return response;
    } catch (error) {
      return console.log('error',error);
    }
  }

  async getLembretes() {
    const response = await this.prisma.lembrete.findMany({
      include: {
        usuario: {
          select: {
            nome: true          
          }
        }
      }
    });
    return response;
  }

  async getLembreteById(id: number) {
    return await this.prisma.lembrete.findUnique({
      where: {
        id
      }
    });
  }

  async searchLembretes(query: string) {
    const singularQuery = pluralize.singular(query);
    const pluralQuery = pluralize.plural(query);

    return await this.prisma.lembrete.findMany({
      where: {
        OR: [
          {
            tipo: {
              contains: singularQuery,
            }
          },
          {
            tipo: {
              contains: pluralQuery,
            }
          },
          {
            titulo: {
              contains: singularQuery,
            }
          },
          {
            titulo: {
              contains: pluralQuery,
            }
          },
          {
            conteudo: {
              contains: singularQuery,
            }
          },
          {
            conteudo: {
              contains: pluralQuery,
            }
          }
        ]
      }
    });
  }

  async updateLembrete(id: number, data: any) {
    return await this.prisma.lembrete.update({
      where: {
        id
      },
      data
    });
  }

  async deleteLembrete(id: number) {
    return await this.prisma.lembrete.delete({
      where: {
        id
      }
    });
  }
}

export default LembreteService;