import { Request, Response } from 'express';
import UserSevice from './Auth.service'

class AuthController {
  private user: UserSevice;

  constructor() {
    this.user = new UserSevice();
  }

  async login(req: Request, res: Response) {
    const { username, senha } = req.body;
    
    if (!username || !senha) {
      return res.status(400).json({ error: 'Missing user or password' });
    }

    const hasUser = await this.user.getUserToLogin({ username, senha });

    if (!hasUser) {
      return res.status(404).json({ error: 'Login or password incorrect' });
    }

    return res.status(200).json(hasUser);
  }

  async foto(req: Request, res: Response) {
    const id = req.params.id;
    const fotos = req.file;
    const hasUser = await this.user.getUserById(+id);

    const foto = fotos && fotos.path ? fotos.filename : null;
    
    if (!hasUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const user = await this.user.sendPhoto(+id, String(foto));

    return res.status(200).json(user);
  };

  async register(req: Request, res: Response) {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: 'Missing data' });
    }

    const newUser = await this.user.register(data);
    return res.status(201).json(newUser);
  }

  async getUsers(req: Request, res: Response) {

    const user = await this.user.getUsers();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  }

  async getUserById(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await this.user.getUserById(+userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;

    const user = await this.user.updateUser(+id, data);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    const user = await this.user.delete(+id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  }
}

export default AuthController;