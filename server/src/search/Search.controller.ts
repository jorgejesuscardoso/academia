import { Request, Response } from 'express';
import SearchService from './Search.service';

class SearchController {
  public search = new SearchService();

  constructor() { 
    this.UserSearch = this.UserSearch.bind(this);
    this.PlanosSearch = this.PlanosSearch.bind(this);
    this.ClienteSearch = this.ClienteSearch.bind(this);
    this.InstrutorSearch = this.InstrutorSearch.bind(this);
  }

  async UserSearch(req: Request, res: Response) {
    const { id, nome, email, telefone } = req.query;

    if (id && !nome && !email && !telefone) {
      const result = await this.search.UserSearchId(Number(id));
      
      return res.status(200).json(result);
    }

    if (!id && nome && !email && !telefone) {
      const result = await this.search.UserSearchNome(String(nome));
      
      return res.status(200).json(result);
    }

    if (!id && !nome && email && !telefone) {
      const result = await this.search.UserSearchEmail(String(email));
      
      return res.status(200).json(result);
    }

    if (!id && !nome && !email && telefone) {
      const result = await this.search.UserSearchTelefone(String(telefone));
      
      return res.status(200).json(result);
    }
  }

  async ClienteSearch(req: Request, res: Response) {
    const { id, nome, email, telefone } = req.query;

    if (id && !nome && !email && !telefone) {
      const result = await this.search.ClienteSearchId(Number(id));
      
      return res.status(200).json(result);
    }

    if (!id && nome && !email && !telefone) {
      const result = await this.search.ClienteSearchNome(String(nome));
      
      return res.status(200).json(result);
    }

    if (!id && !nome && email && !telefone) {
      const result = await this.search.ClienteSearchEmail(String(email));
      
      return res.status(200).json(result);
    }

    if (!id && !nome && !email && telefone) {
      const result = await this.search.ClienteSearchTelefone(String(telefone));
      
      return res.status(200).json(result);
    }
  }

  async InstrutorSearch(req: Request, res: Response) {
    const { id, nome, email, telefone } = req.query;

    if (id && !nome && !email && !telefone) {
      const result = await this.search.InstrutorSearchId(Number(id));
      
      return res.status(200).json(result);
    }

    if (!id && nome && !email && !telefone) {
      const result = await this.search.InstrutorSearchNome(String(nome));
      
      return res.status(200).json(result);
    }

    if (!id && !nome && email && !telefone) {
      const result = await this.search.InstrutorSearchEmail(String(email));
      
      return res.status(200).json(result);
    }

    if (!id && !nome && !email && telefone) {
      const result = await this.search.InstrutorSearchTelefone(String(telefone));
      
      return res.status(200).json(result);
    }
  }

  async PlanosSearch(req: Request, res: Response) {
    
    const { id, nome } = req.query;

    if (id && !nome) {
      const result = await this.search.PlanosSearchId(Number(id));
      
      return res.status(200).json(result);
    }

    if (!id && nome) {
      const result = await this.search.PlanosSearchNome(String(nome));
      
      return res.status(200).json(result);
    }
  }

}

export default SearchController;