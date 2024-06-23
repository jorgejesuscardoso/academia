import { Request, Response } from 'express';
import UserSevice from './Auth.service'

class AuthController {
  private user: UserSevice;

  constructor() {
    this.user = new UserSevice();
  }

  async login(req: Request, res: Response) {
    const { user, senha } = req.body;

    if (!user || !senha) {
      return res.status(400).json({ error: 'Missing user or password' });
    }

    const hasUser = await this.user.getUser({ user, senha });

    if (!hasUser) {
      return res.status(404).json({ error: 'Login or password incorrect' });
    }

    return res.status(200).json(hasUser);
  }
}

export default AuthController;