import { Request, Response } from 'express';
import PublicacaoService from '../../services/publicacao/Publicacao.service';

class PublicacaoController {
  public publicacao : PublicacaoService;

  constructor() {
    this.publicacao = new PublicacaoService();
  }

  async criar(req: Request, res: Response) {
    try {
        
        const { titulo, descricao, conteudo, usuarioId, tipo } = req.body;
        const { file } = req;

        const imagePath = file && file.path ? file.filename : null;
        const newPublication = {
            titulo,
            descricao,
            conteudo,
            usuarioId: Number(usuarioId),
            tipo,
            imagem: imagePath
        };

        const newPub = await this.publicacao.criar(newPublication);
        return res.status(201).json(newPub);
    } catch (error) {
        console.error('Erro ao criar publicação:', error);
        return res.status(500).json({ error: 'Erro ao criar publicação' });
    }
  }

  async listar(req: Request, res: Response) {
    const lista = await this.publicacao.listar();
    
    return res.status(200).json(lista);
  }

  async listarPorId(req: Request, res: Response) {
    const { id } = req.params;

    const publicacao = await this.publicacao.listarPorId(Number(id));

    return res.status(200).json(publicacao);
  }

  async atualizar(req: Request, res: Response) {
    const publicacao = req.body;

    const updatedPub = await this.publicacao.atualizar(publicacao);

    return res.status(200).json(updatedPub);
  }

  async deletar(req: Request, res: Response) {
    const { id } = req.params;

    await this.publicacao.deletar(Number(id));

    return res.status(204).send();
  }
}

export default PublicacaoController;