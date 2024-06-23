export interface UserLoginDTO {
  user: string;
  senha: string;
}

export interface UserDTO {
  id?: number;
  user?: string;
  email?: string;
  senha?: string;
  role?: string;
}