export interface UserLoginDTO {
  user: string;
  senha: string;
}

export interface UserDTO {
  id: number;
  nome: string;
  user: string;
  email: string;
  senha: string;
  role: string;
}