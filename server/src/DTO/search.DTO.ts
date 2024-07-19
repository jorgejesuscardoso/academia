import { ClienteDTO } from './cliente';
import { InstrutoresDTO } from './instrutores.DTO';
import { PlanoDTO } from './plano';
import { UserDTO } from './user';

interface SearchDTO {
  ClienteSearch(cliente: string) : Promise<ClienteDTO[]>;
  PlanosSearch(plano: string) : Promise<PlanoDTO>;
  InstrutoresSearch(instrutor: string) : Promise<InstrutoresDTO[]>;
  UsuariosSearch(usuario: string) : Promise<UserDTO[]>;
}

export default SearchDTO;