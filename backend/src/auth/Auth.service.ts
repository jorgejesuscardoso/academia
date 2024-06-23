import { PrismaClient } from '@prisma/client';

class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUser(data: { user: string, senha: string }) {
    const { user } = data;

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
}

export default AuthService;