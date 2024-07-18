import { Request, Response } from 'express';
import PlanoService from '../../services/plano/Plano.service';

class PlanoController {
  private planoService = new PlanoService();

  constructor() {  }

  async CreatePlano(req: Request, res: Response) {
    const { nome, valor, clientes, descricao } = req.body;

    const data = await this.planoService.CreatePlano({ nome, valor, clientes, descricao});

    res.status(201).json(data);
  }

  async GetPlanos(req: Request, res: Response) {
    const data = await this.planoService.GetPlanos();

    res.status(200).json(data);
  }

  async GetPlanoById(req: Request, res: Response) {
    const { id } = req.params;

    const data = await this.planoService.GetPlanoById(Number(id));

    res.status(200).json(data);
  }

  async UpdatePlano(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, valor, descricao } = req.body;

    const data = await this.planoService.UpdatePlano(Number(id), { 
      id: Number(id),
      nome,
      valor,
      descricao,
      clientes: []
    });

    res.status(200).json(data);
  }

  async DeletePlano(req: Request, res: Response) {
    const { id } = req.params;

    const data = await this.planoService.DeletePlano(Number(id));

    res.status(200).json(data);
  }

}

export default PlanoController;