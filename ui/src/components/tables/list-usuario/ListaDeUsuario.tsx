import { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from './style';
import { getUsers } from '../../../service/usuario';
import Swal from 'sweetalert2';
import AsideLeft from '../../aside/AsideLeft';
import AsideRight from '../../aside/AsideRight';

type IUsuario = {
  id: number;
  username: string;
  nome: string;
  senha: string;
  telefone: string;
  email: string;
  turno: string;
  role: string;
}

const ListaDeUsuario = () => {
  const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await getUsers();
        setUsuarios(response);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao buscar usuários',
          text: 'Erro interno do servidor',
        });
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <Container>
      <h1>Lista de usuários</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome de usuário</TableCell>
            <TableCell>Nome do Funcionário</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell className='mobile'>Email</TableCell>
            <TableCell>Turno</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(usuarios) && usuarios.map((usuario) => (
            <TableRow key={usuario.id}>
              <TableCell>{usuario.username}</TableCell>
              <TableCell>{usuario.nome}</TableCell>
              <TableCell>{usuario.telefone}</TableCell>
              <TableCell className='mobile'>{usuario.email}</TableCell>
              <TableCell>{usuario.turno}</TableCell>
              <TableCell>{usuario.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    <AsideLeft />
    <AsideRight />
  </Container>
  );
}

export default ListaDeUsuario;