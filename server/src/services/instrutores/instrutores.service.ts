import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { InstrutoresDTO } from '../../DTO/instrutores.DTO';

class InstrutorService {
  private prisma: PrismaClient;

  constructor() {  
    this.prisma = new PrismaClient();
  }

  async CreateInstrutor(data: InstrutoresDTO) {
    const { nome, email, telefone, turno } = data;
    const instrutor = await this.prisma.instrutor.create({
      data: {
        nome,
        email,
        telefone,
        turno
      },
    });
    return instrutor;
  }
  
  async GetInstrutores() {
    const instrutores = await this.prisma.instrutor.findMany();
    return instrutores;
  }

  async GetInstrutorById(id: number) {
    const instrutor = await this.prisma.instrutor.findUnique({
      where: { id: Number(id) },
    });
    return instrutor;
  }

  async GetInstrutorByNome(nome: string) {
    const instrutor = await this.prisma.instrutor.findMany({
      where: { nome: { contains: nome } },
    });
    return instrutor;
  }

  async GetInstrutorByEmail(email: string) {
    const instrutor = await this.prisma.instrutor.findUnique({
      where: { email },
    });
    return instrutor;
  }

  async UpdateInstrutor(id: number, data: InstrutoresDTO) {
    const { nome, email, telefone, turno } = data;
    const instrutor = await this.prisma.instrutor.update({
      where: { id: Number(id) },
      data: {
        nome,
        email,
        telefone,
        turno
      },
    });
    return instrutor;
  }

  async DeleteInstrutor(id: number) {
    const instrutor = await this.prisma.instrutor.delete({
      where: { id: Number(id) },
    });
    return;
  }
}

export default InstrutorService;
