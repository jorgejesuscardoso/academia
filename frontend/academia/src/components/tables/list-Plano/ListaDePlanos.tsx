/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Container, Table, TableHead, TableBody, TableRow, TableCell } from './style';
import { GetPlanos } from '../../../service/planos';
import MenuConfigPlanos from '../../menus/planos/ConfigPlanos';

export const ListaDePlanos = () => {
  const [planos, setPlanos] = useState([]);
  const [showConfigMenu, setShowConfigMenu] = useState<boolean>(false);
  
  useEffect(() => {
    handleGetPlanos();
  }, [planos]);

  const handleGetPlanos = async () => {
    const response = await GetPlanos();
    setPlanos(response);
  }
  
  return (
    <Container>
      <Table>
        <TableHead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Descrição</th>
            <th>QTD Clientes</th>
            <th>
              <div>
                <p>Lista Clientes</p>
                <span
                  onClick={() => setShowConfigMenu(!showConfigMenu)}
                >
                  <img src="config.png" alt="" />
                </span>
              </div>
            </th>
          </tr>
        </TableHead>
        <TableBody>
          {planos && planos.map((plano: any) => (
            <TableRow
              key={plano.nome}
            >
              <TableCell className='planNumbers'>{plano.id}</TableCell>
              <TableCell className='planName'>{plano.nome}</TableCell>
              <TableCell className='valorPlano'>
                <div>
                <p>R$</p> <span>{plano.valor.toLocaleString('pt-BR', 'BRL')},00</span>
                </div>
              </TableCell>
              <TableCell className='descript'><p>{ plano.descricao }</p></TableCell>
              <TableCell className='planNumbers'>{plano.clientes.length}</TableCell>
              <TableCell>               
                <select name="lista-de-clientes">
                  <option hidden>Lista de Clientes</option>
                  {plano.clientes.map((cliente: any) => (
                    <option key={cliente.id} disabled>
                      ID: {cliente.id} -- {cliente.nome} -- Status: {cliente.status}
                    </option>
                  ))}
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {
        showConfigMenu && (            
          <MenuConfigPlanos
            handleGetPlanos={handleGetPlanos}
            setShowConfigMenu={setShowConfigMenu}
            showConfigMenu={showConfigMenu}
          />
        )
      }
    </Container>
  )
}
