import { Request, Response } from 'express';
import InstrutorService from '../../services/instrutores/instrutores.service';

class InstrutorController {
  private clienteService = new InstrutorService();

  constructor() {  }

  async CreateInstrutor(req: Request, res: Response) {
    const instrutor = await this.clienteService.CreateInstrutor(req.body);
    return res.json(instrutor);
  }

  async GetInstrutores(req: Request, res: Response) {
    const instrutores = await this.clienteService.GetInstrutores();
    return res.json(instrutores);
  }

  async GetInstrutorById(req: Request, res: Response) {
    const instrutor = await this.clienteService.GetInstrutorById(Number(req.params.id));
    return res.json(instrutor);
  }

  async GetInstrutorByNome(req: Request, res: Response) {
    const instrutor = await this.clienteService.GetInstrutorByNome(String(req.params.nome));
    return res.json(instrutor);
  }

  async GetInstrutorByEmail(req: Request, res: Response) {
    const instrutor = await this.clienteService.GetInstrutorByEmail(String(req.params.email));
    return res.json(instrutor);
  }

  async UpdateInstrutor(req: Request, res: Response) {
    const instrutor = await this.clienteService.UpdateInstrutor(Number(req.params.id), req.body);
    return res.json(instrutor);
  }

  async DeleteInstrutor(req: Request, res: Response) {
    const instrutor = await this.clienteService.DeleteInstrutor(Number(req.params.id));
    return res.json(instrutor);
  }
}

export default InstrutorController;
