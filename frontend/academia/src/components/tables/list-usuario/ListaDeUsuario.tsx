import { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from './style';
import { getUsers } from '../../../service/usuario';
import Swal from 'sweetalert2';

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
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nome de usuário</TableCell>
          <TableCell>Nome do Funcionário</TableCell>
          <TableCell>Telefone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Turno</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {usuarios.map((usuario) => (
          <TableRow key={usuario.id}>
            <TableCell>{usuario.username}</TableCell>
            <TableCell>{usuario.nome}</TableCell>
            <TableCell>{usuario.telefone}</TableCell>
            <TableCell>{usuario.email}</TableCell>
            <TableCell>{usuario.turno}</TableCell>
            <TableCell>{usuario.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Container>
  );
}

export default ListaDeUsuario;