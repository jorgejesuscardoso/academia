import { Request, Response } from 'express';
import EventoService from '../../services/evento/Evento.service';

class EventoController {
  public eventoService: EventoService;

  constructor() {
    this.eventoService = new EventoService();
  }

  async createEvento(req: Request, res: Response) {
    try {
      const { titulo, conteudo, usuarioId, tipo } = req.body;
      const { file } = req;

        const imagePath = file && file.path ? file.filename : null;
        const newPublication = {
            titulo,
            conteudo,
            usuarioId: Number(usuarioId),
            tipo,
            imagem: imagePath
        };
        const evento = await this.eventoService.createEvento(newPublication);
      res.status(201).json(evento);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getEventos(req: Request, res: Response) {
    try {
      const eventos = await this.eventoService.getEventos();
      res.status(200).json(eventos);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async searchEventos(req: Request, res: Response) {
    try {
      const query = req.query.query as string;
      const eventos = await this.eventoService.searchEventos(query);
      res.status(200).json(eventos);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getEventoById(req: Request, res: Response) {
    try {
      const evento = await this.eventoService.getEventoById(parseInt(req.params.id));
      res.status(200).json(evento);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async updateEvento(req: Request, res: Response) {
    try {
      const evento = await this.eventoService.updateEvento(parseInt(req.params.id), req.body);
      res.status(200).json(evento);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async deleteEvento(req: Request, res: Response) {
    try {
      await this.eventoService.deleteEvento(parseInt(req.params.id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export default EventoController;