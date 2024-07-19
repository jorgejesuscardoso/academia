import { ClienteDTO } from './cliente';

export interface CreatePlanoDTO {
  nome: string;
  valor: number;
  descricao: string;
  clientes: ClienteDTO[];
}

export interface PlanoDTO {
  id: number;
  nome: string;
  valor: number;
  descricao: string;
  clientes: ClienteDTO[];
}
