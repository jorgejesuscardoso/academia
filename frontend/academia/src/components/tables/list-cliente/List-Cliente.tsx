import { useEffect, useState } from 'react';
import { GetClientes } from '../../../service/clienteApi';
import { Container, Table, TableHead, TableBody, TableRow, TableCell } from './style';
import { calculateDaysUntil } from '../../../utils/calculateDate';
import { ConfigClientList } from '../../menus/cliente/ConfigClientList';

type Cliente = {
  id: number,
  nome: string,
  email: string,
  telefone: string,
  idade: number,
  inicio: string,
  plano: string,
  diasRestantes: number
}

type ClienteApi = {
  id: number,
  nome: string,
  email: string,
  telefone: string,
  dataNascimento: string,
  dataInicio: string,
  plano: string,
  vencimento: string
}

const calculateAge = (birthDate: string) => {
  const [day, month, year] = birthDate.split('/').map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export const ListCliente = () => {
  const [listClients, setListClients] = useState<Cliente[]>([]);
  const [toggleConfig, setToggleConfig] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = await GetClientes();
        const attDate = client.map((item: ClienteApi) => {
          const age = calculateAge(item.dataNascimento);
          const daysUntilExpiry = calculateDaysUntil(item.vencimento);
          return {
            id: item.id,
            nome: item.nome,
            email: item.email,
            telefone: item.telefone,
            idade: age,
            inicio: item.dataInicio,
            plano: item.plano,
            diasRestantes: daysUntilExpiry
          };
        });
        setListClients(attDate);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };
    fetchData();
  }, []);

  const handleToggleConfig = () => {
    setToggleConfig(!toggleConfig);
  }
  return (
    <Container>
      <Table>
        <TableHead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Idade</th>
            <th>Início</th>
            <th>Plano</th>
            <th>Dias Restantes</th>
          </tr>
        </TableHead>
        <TableBody>
          {listClients.map((item: Cliente) => (
            <TableRow key={item.id}>
              <TableCell>{ item.id }</TableCell>
              <TableCell>
                { item.nome }
              </TableCell>
              <TableCell>{ item.email }</TableCell>
              <TableCell>{ item.telefone }</TableCell>
              <TableCell>{ item.idade }</TableCell>
              <TableCell>{ item.inicio }</TableCell>
              <TableCell>{ item.plano }</TableCell>
              <TableCell>
                <div>
                  { item.plano !== 'Vitalício' ? `${item.diasRestantes} Dias` : 'Sem Fim' }
                  <button
                    onClick={handleToggleConfig}                  
                  >
                    <img src="config_black.png" alt="" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {  toggleConfig && <ConfigClientList /> } 
    </Container>
  )
}
