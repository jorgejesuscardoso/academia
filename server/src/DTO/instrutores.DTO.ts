export interface InstrutoresDTO {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  turno: string;
}

export interface CreateInstrutoresDTO {
  nome: string;
  email: string;
  telefone?: string;
  turno: string;
}