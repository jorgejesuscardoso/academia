import { PrismaClient } from '@prisma/client';
import { UserDTO } from '../DTO/user';

class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }


  async register(data: UserDTO) {
    const user = data.user && data.user.toLowerCase();

    const hasUser = await this.prisma.user.findFirst({
      where: {
        user,
      },
    });

    if (hasUser) {
      return { error: 'User already exists' };
    }

    const fixedData = {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      user: user.toLowerCase(),
      role: data.role,
    };

    const newUser = await this.prisma.user.create({
      data: fixedData,
    });

    return newUser;
  }

  async getUserToLogin(data: { user: string, senha: string }) {
    const user = data.user.toLowerCase();

    const login = await this.prisma.user.findFirst({
      where: {
        user,
      },
    });

    if (!login) {
      return { error: 'Login or password incorrect' };
    }

    const logged = login.senha === data.senha;

    if (!logged) {
      return { error: 'Login or password incorrect'};
    }

    return login;
  }

  async getUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async getUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async updateUser(id: number, data: UserDTO) {

    const findUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    
    if (!findUser) {
      return { error: 'User not found' };
    }

    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });

    return user;
  }

  async delete(id: number) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return user;
  }
}

export default AuthService;