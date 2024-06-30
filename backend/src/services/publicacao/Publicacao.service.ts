import { PrismaClient } from '@prisma/client';
import { PublicacaoDTO } from '../../DTO/publicacaoDTO';

class PublicacaoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async listar() {

    const getPub = await this.prisma.publicacao.findMany();    

    return getPub || [];
  }

  async listarPorId(id: number) {
    const getPub = await this.prisma.publicacao.findUnique({
      where: {
        id
      }
    });

    return getPub;
  }

  async criar(publicacao: PublicacaoDTO) {
    const { titulo, descricao, autor, conteudo } = publicacao;

    const newPub = await this.prisma.publicacao.create({
      data: {
        titulo,
        descricao,
        conteudo,
        usuarioId: autor,
      }
    });

    return newPub;
  }

  async atualizar(publicacao: PublicacaoDTO) {
    const { id, titulo, descricao, conteudo } = publicacao;

    const updatedPub = await this.prisma.publicacao.update({
      where: {
        id
      },
      data: {
        titulo,
        descricao,
        conteudo
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