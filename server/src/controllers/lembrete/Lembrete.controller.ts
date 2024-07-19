import { Request, Response } from 'express';
import LembreteService from '../../services/lembrete/Lembrete.service';

class LembreteController {
  public lembreteService: LembreteService;

  constructor() {
    this.lembreteService = new LembreteService();
  }

  async createLembrete(req: Request, res: Response) {
    try {
      const { titulo, conteudo, usuarioId, tipo, data } = req.body;
      const { file } = req;
      const imagePath = file && file.path ? file.filename : null;
      const newPublication = {
          titulo,
          data: new Date(data),
          conteudo,
          concluido: false,
          usuarioId: Number(usuarioId),
          tipo,
          imagem: imagePath
      };
      
      const lembrete = await this.lembreteService.createLembrete(newPublication);
      res.status(201).json(lembrete);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getLembretes(req: Request, res: Response) {
    try {
      const lembretes = await this.lembreteService.getLembretes();
      
      res.status(200).json(lembretes);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async searchLembretes(req: Request, res: Response) {
    try {
      const query = req.query.query as string;
      const lembretes = await this.lembreteService.searchLembretes(query);
      res.status(200).json(lembretes);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getLembreteById(req: Request, res: Response) {
    try {
      const lembrete = await this.lembreteService.getLembreteById(parseInt(req.params.id));
      res.status(200).json(lembrete);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async updateLembrete(req: Request, res: Response) {
    try {
      const lembrete = await this.lembreteService.updateLembrete(parseInt(req.params.id), req.body);
      res.status(200).json(lembrete);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async deleteLembrete(req: Request, res: Response) {
    try {
      await this.lembreteService.deleteLembrete(parseInt(req.params.id));
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }  
}

export default LembreteController;