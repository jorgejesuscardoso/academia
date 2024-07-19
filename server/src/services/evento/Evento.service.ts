import { PrismaClient } from '@prisma/client';
import pluralize = require('pluralize');

class EventoService {
  public prisma : PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createEvento(data: any) {
    try {
      const response = await this.prisma.evento.create({
        data
      });
      return response;
    } catch (error) {
      console.log('erro',error);
    }
  }

  async getEventos() {
    const response = await this.prisma.evento.findMany({
      include: {
        usuario: {
          select: {
            username: true,
          }
        } 
      },
    });
    return response;
  }

  async searchEventos(query: string) {
    const singularQuery = pluralize.singular(query);
    const pluralQuery = pluralize.plural(query);

    return await this.prisma.evento.findMany({
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
        ],        
      },
      include: {
        usuario: {
          select: {
            username: true,
          }
        } 
      },
    });
  }

  async getEventoById(id: number) {
    return await this.prisma.evento.findUnique({
      where: {
        id
      },
      include: {
        usuario: {
          select: {
            username: true,
          }
        } 
      },
    });
  }

  async updateEvento(id: number, data: any) {
    return await this.prisma.evento.update({
      where: {
        id
      },
      data
    });
  }

  async deleteEvento(id: number) {
    return await this.prisma.evento.delete({
      where: {
        id
      }
    });
  }
}

export default EventoService;