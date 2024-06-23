import { Request, Response } from 'express';
import ClienteService from '../../services/cliente/Cliente.service';

class ClienteController {
  private clienteService = new ClienteService();

  constructor() {  }

  async CreateCliente(req: Request, res: Response) {
    const cliente = await this.clienteService.CreateCliente(req.body);
    res.status(201).json(cliente);
  }

  async GetClientes(req: Request, res: Response) {

    const clientes = await this.clienteService.GetClientes();
    res.status(200).json(clientes);
  }

  async GetClienteById(req: Request, res: Response) {
    const cliente = await this.clienteService.GetClienteById(Number(req.params.id));
    res.status(200).json(cliente);
  }

  async GetClienteByName(req: Request, res: Response) {
    const cliente = await this.clienteService.GetClienteByName(String(req.params.nome));
    res.status(200).json(cliente);
  }

  async GetClienteByEmail(req: Request, res: Response) {
    const cliente = await this.clienteService.GetClienteByEmail(String(req.params.email));
    res.status(200).json(cliente);
  }

  async UpdateCliente(req: Request, res: Response) {
    const cliente = await this.clienteService.UpdateCliente(Number(req.params.id), req.body);
    res.status(200).json(cliente);
  }

  async DeleteCliente(req: Request, res: Response) {
    const cliente = await this.clienteService.DeleteCliente(Number(req.params.id));
    res.status(200).json(cliente);
  }
}

export default ClienteController;
