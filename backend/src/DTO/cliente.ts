// src/dtos/cliente.dto.ts

export interface CreateClienteDTO {
  nome: string;
  email: string;
  telefone: string | null;
  dataNascimento: Date;
  dataInicio: Date;
  vencimento: Date;
  planoId: number;
}

export interface ClienteDTO {
  id: number;
  nome: string;
  email: string;
  telefone: string | null;
  dataNascimento: Date;
  dataInicio: Date;
  vencimento: Date;
  planoId: number;
}
