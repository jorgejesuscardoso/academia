/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { GetClientes } from '../../../service/clienteApi';
import { Container, Table, TableHead, TableBody, TableRow, TableCell, DivOverFlowTable } from './style';
import { calculateAge, calculateDaysUntil } from '../../../utils/calculateDate';
import MenuConfigClient from '../../menus/cliente/MenuConfigClient';
import Summary from './sumary';
import Swal from 'sweetalert2';

export type Cliente = {
  id: number,
  nome: string,
  email: string,
  telefone: string,
  idade: number,
  inicio: string,
  plano: string,
  planoId: number,
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
  planoId: number,
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
    planoId: 0,
    status: '',
    diasRestantes: 0  
  });

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
            planoId: item.planoId,
            status: item.status,
            diasRestantes: daysUntilExpiry
          };
        });
        
        setListClients(attDate);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao buscar clientes',
          text: 'Erro interno do servidor'
        });
      }
    };
    fetchData();
  }

  const getRowClassName = (item: any) => {
    let className = ' normal';
  
    if (item.diasRestantes < 0) {
      className += ' vencido';
    }

    if (item.diasRestantes < 6 && item.diasRestantes >= 0) {
      className += ' alert';
    }
    
    if (item.plano === 'Vitalício') {
      className += ' vitalicio';
    }
  
    return className.trim();
  };  

  const getStringDays = (days: number) => {
    
    if (days > 0) {
      return (<p>{days} dias restantes</p>);
    }
    if (days === 0) {
      return (<p className='alert'>Hoje é o último dia</p>);
    }

    if (days < 0) {
      return (<p className='error'>Vencido</p>);
    }

    if (days < -1) {
      return (<p className='error'>Vencido há ${days * -1} dias</p>);
    }

    if (!days) {
      return (<p className='success'>Vitalício</p>);
    }
  };

  return (
    <Container>
        <h1>Gerenciamento de Clientes</h1>
      <DivOverFlowTable>
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
              <TableRow
                key={item.id}
                className={ getRowClassName(item) }
              >
                <TableCell>{ item.id }</TableCell>
                <TableCell>
                  { item.nome } 
                </TableCell>
                <TableCell>{ item.email }</TableCell>
                <TableCell>{ item.telefone }</TableCell>
                <TableCell>{ item.idade } anos</TableCell>
                <TableCell>{ item.inicio }</TableCell>
                <TableCell>{ item.plano }</TableCell>
                <TableCell>{ item.status }</TableCell>                
                <TableCell>
                  <div>
                    { getStringDays(item.diasRestantes)}
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
      </DivOverFlowTable>
      {  toggleConfig && <MenuConfigClient
          id={selectedClient.id}
          nome={selectedClient.nome}
          email={selectedClient.email}
          telefone={selectedClient.telefone}
          dataInicio={selectedClient.inicio}
          plano={selectedClient.plano}
          planoId={selectedClient.planoId}
          setToggleConfig={setToggleConfig}
          handleGetList={handleGetList}   
      /> } 

      <Summary
        listClients={listClients}
        handleGetList={handleGetList}
      />
    </Container>
  )
}
