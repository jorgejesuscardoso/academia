/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Container, DivOverFlowTable, InstrutorContainer, StyledCell, StyledHeader, StyledTable, Table, TableBody, TableCell, TableHead, TableRow, Title } from './style';
import { getInstrutores } from '../../../service/InstrutorApi';
import AsideLeft from '../../aside/AsideLeft';
import AsideRight from '../../aside/AsideRight';

type Instrutor = {
  id: number,
  nome: string,
  email: string
  telefone: string,
  turno: string,
}
const ListaDeInstrutores = () => {
  const [instrutores, setInstrutores] = useState<Instrutor[]>([]);
  const [turnos, setTurno] = useState({
    manha: 0,
    tarde: 0,
    noite: 0,
  });

  useEffect(() => {
    async function fetchInstrutores() {
      const response = await getInstrutores();
      setInstrutores(response);

      const filterTurno = response.reduce((acc: any, instrutor: Instrutor) => {
        if (instrutor.turno === 'Manhã') {
          acc.manha += 1;
        }
        if (instrutor.turno === 'Tarde') {
          acc.tarde += 1;
        }
        if (instrutor.turno === 'Noite') {
          acc.noite += 1;
        }
        return acc;
      }, {
        manha: 0,
        tarde: 0,
        noite: 0,
      });

      setTurno(filterTurno);
    }

    fetchInstrutores();
  }, []);
  
  return (
    <Container>
      <h1>Gerenciamento de instrutores</h1>
      <DivOverFlowTable>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Turno</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { Array.isArray(instrutores) && instrutores.map(instrutor => (
            <TableRow key={instrutor.id}>
              <TableCell>{instrutor.id}</TableCell>
              <TableCell>{instrutor.nome}</TableCell>
              <TableCell>{instrutor.telefone}</TableCell>
              <TableCell>{instrutor.email}</TableCell>
              <TableCell>{instrutor.turno}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       </Table>
      </DivOverFlowTable>
      <InstrutorContainer>
        <Title>QTD de instrutores por turno</Title>
        <StyledTable>
          <thead>
            <tr>
              <StyledHeader>Manhã</StyledHeader>
              <StyledHeader>Tarde</StyledHeader>
              <StyledHeader>Noite</StyledHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StyledCell>{ turnos.manha }</StyledCell>
              <StyledCell>{ turnos.tarde }</StyledCell>
              <StyledCell>{ turnos.noite }</StyledCell>
            </tr>
          </tbody>
        </StyledTable>
      </InstrutorContainer>

      <AsideLeft />
      <AsideRight />
  </Container>
  );
}

export default ListaDeInstrutores;