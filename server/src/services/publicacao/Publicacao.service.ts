import { PrismaClient } from '@prisma/client';
import { PublicacaoDTO } from '../../DTO/publicacaoDTO';
import pluralize = require('pluralize');

class PublicacaoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async criar(publicacao: PublicacaoDTO) {
    const { titulo, conteudo, usuarioId, tipo, imagem } = publicacao;

    const newPub = await this.prisma.publicacao.create({
      data: {
        tipo,
        titulo,
        conteudo,
        usuarioId,
        imagem
      }
    });

    return newPub;
  }

  async listar() {

    const getPub = await this.prisma.publicacao.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        usuario: {
          select: {
            nome: true,
            email: true,
            id: true
          }
        }
      }
    });    

    return getPub || [];
  }

  async listarPorId(id: number) {
    const getPub = await this.prisma.publicacao.findUnique({
      where: {
        id        
      },
      include: {
        usuario: {
          select: {
            nome: true,
            email: true,
            id: true
          }
        }
      }

    });

    return getPub;
  }

  async searchPublicacao(query: string) {
    return await this.prisma.publicacao.findMany({
      where: {
        OR: [
          {
            tipo: {
              contains: query,
            }
          },          
          {
            titulo: {
              contains: query,
            }
          },
          {
            conteudo: {
              contains: query,
            }
          },
        ]
      }
    });
  }

  async atualizar(publicacao: PublicacaoDTO) {
    const { id, titulo, conteudo, updatedBy } = publicacao;
    const updatedPub = await this.prisma.publicacao.update({
      where: {
        id
      },
      data: {
        titulo,
        conteudo,
        updatedBy
      }
    });

    return updatedPub;
  }

  async deletar(id: number) {
    const deletedPub = await this.prisma.publicacao.delete({
      where: {
        id
      }
    });
    
    return deletedPub;
  }
}

export default PublicacaoService;