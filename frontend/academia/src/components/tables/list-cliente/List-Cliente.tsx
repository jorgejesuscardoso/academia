import { useEffect, useState } from 'react';
import { GetClientes } from '../../../service/clienteApi';
import { Container, Table, TableHead, TableBody, TableRow, TableCell } from './style';
import { calculateAge, calculateDaysUntil } from '../../../utils/calculateDate';
import MenuConfigClient from '../../menus/cliente/MenuConfigClient';

type Cliente = {
  id: number,
  nome: string,
  email: string,
  telefone: string,
  idade: number,
  inicio: string,
  plano: string,
  status: string,
  diasRestantes: number
}

export type ClienteApi = {
  id: number,
  nome: string,
  email: string,
  telefone: string,
  dataNascimento: string,
  dataInicio: string,
  plano: string,
  status: string,
  vencimento: string
}

export const ListCliente = () => {
  const [listClients, setListClients] = useState<Cliente[]>([]);
  const [toggleConfig, setToggleConfig] = useState<boolean>(false);
  const [selectedClient, setSelectedClient] = useState<Cliente>({
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    idade: 0,
    inicio: '',
    plano: '',
    status: '',
    diasRestantes: 0  
  });

  const options = ['Dias', 'Aguardando Pagamento', 'Vencido', 'Vitalício']

  useEffect(() => {
    handleGetList();
  }, []);

  const handleToggleConfig = () => {
    setToggleConfig(!toggleConfig);
  }
  const handleGetList = () => {
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
            status: item.status,
            diasRestantes: daysUntilExpiry
          };
        });
        
        setListClients(attDate);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };
    fetchData();
  }

  const activeDesactiveClient = () => {
    console.log('Desativar Cliente');
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
            <th>Status</th>
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
              <TableCell>{ item.status }</TableCell>                
              <TableCell>
                <div>
                  { item.diasRestantes > 0 ? `${item.diasRestantes} ${options[0]}` : item.diasRestantes <= 0 ? <p className='error'><span>{ options[2] }.</span> <span>{ options[1] }</span></p> : <p className='success'>{ options[3] }</p>}
                  <button
                    onClick={
                      () => {
                      handleToggleConfig();
                      setSelectedClient(item);
                    }}                
                  >
                    <img src="config_black.png" alt="" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {  toggleConfig && <MenuConfigClient
          id={selectedClient.id}
          nome={selectedClient.nome}
          email={selectedClient.email}
          telefone={selectedClient.telefone}
          dataInicio={selectedClient.inicio}
          plano={selectedClient.plano}
          setToggleConfig={setToggleConfig}
          handleGetList={handleGetList}
          activeDesactiveClient={activeDesactiveClient}     
      /> } 
    </Container>
  )
}
