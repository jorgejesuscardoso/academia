export interface UserLoginDTO {
  user: string;
  senha: string;
}

export interface UserDTO {
  id: number;
  nome: string;
  username: string;
  telefone: string;
  email: string;
  senha: string;
  turno: string;
  role: string;
  foto?: string;
}