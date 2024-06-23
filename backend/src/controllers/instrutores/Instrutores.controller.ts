import { Request, Response } from 'express';
import ClienteService from '../../services/cliente/Cliente.service';

class InstrutorController {
  //private clienteService = new ClienteService();

  constructor() {  }

  async index(req: Request, res: Response) {
    const instrutores = { nome: 'Instrutor 1', idade: 30 };
    return res.json(instrutores);
  }
}

export default InstrutorController;
