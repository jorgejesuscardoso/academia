import { useEffect, useState } from 'react';
import { Cliente } from './List-Cliente';
import {
  SummaryContainer,
  SummaryTitle,
  ColorLegend,
  LegendItem,
  ColorBox,
  ClientsContainer,
  Title,
  StyledTable,
  StyledHeader,
  StyledCell,
} from './style';

type SummaryProps = {
  listClients: Cliente[];
  handleGetList: () => void;
}

type FilterType = {
  regular: number;
  emVencimento: number;
  vencido: number;
  vitalicio: number;
  mensal: number;
  trimestral: number;
  semestral: number;
  anual: number;
  bienal: number;
}

const Summary = ({ listClients }: SummaryProps) => {
  const [filteredAll, setFilteredAll] = useState<FilterType>({
    regular: 0,
    emVencimento: 0,
    vencido: 0,
    vitalicio: 0,
    mensal: 0,
    trimestral: 0,
    semestral: 0,
    anual: 0,
    bienal: 0
  });

  useEffect(() => {
    const filtered = listClients.reduce((acc, client) => {
      if (client.diasRestantes > 5) {
        acc.regular += 1;
      }
    
      if (client.diasRestantes <= 5 && client.diasRestantes > 0) {
        acc.emVencimento += 1;
      }
    
      if (client.diasRestantes <= 0) {
        acc.vencido += 1;
      }
    
      if (client.plano === 'Vitalício') {
        acc.vitalicio += 1;
      }
    
      if (client.plano === 'Mensal') {
        acc.mensal += 1;
      }
    
      if (client.plano === 'Trimestral') {
        acc.trimestral += 1;
      }
    
      if (client.plano === 'Semestral') {
        acc.semestral += 1;
      }
    
      if (client.plano === 'Anual') {
        acc.anual += 1;
      }
    
      if (client.plano === 'Bienal') {
        acc.bienal += 1;
      }
    
      return acc;
    }, {
      regular: 0,
      emVencimento: 0,
      vencido: 0,
      vitalicio: 0,
      mensal: 0,
      trimestral: 0,
      semestral: 0,
      anual: 0,
      bienal: 0
    });    

    setFilteredAll(filtered);

  }, [listClients]);

  return (
    <SummaryContainer>
      <ColorLegend>
        <SummaryTitle>Legenda de Cores para Clientes</SummaryTitle>
        <LegendItem>
          <ColorBox className="yellow" />
          <span>Clientes com planos em vencimento nos próximos 5 dias</span>
        </LegendItem>
        <LegendItem>
          <ColorBox className="green" />
          <span>Clientes com plano vitalício</span>
        </LegendItem>
        <LegendItem>
          <ColorBox className="red" />
          <span>Clientes com mensalidade/plano vencido</span>
        </LegendItem>
        <LegendItem>
          <ColorBox className="white" />
          <span>Clientes com planos não vitalícios e mensalidade regular</span>
        </LegendItem>
      </ColorLegend>

      <ClientsContainer>
        <Title>QTD de clientes por tipo de planos</Title>
        <StyledTable>
          <thead>
            <tr>
              <StyledHeader>Mensal</StyledHeader>
              <StyledHeader>Trimestral</StyledHeader>
              <StyledHeader>Semestral</StyledHeader>
              <StyledHeader>Anual</StyledHeader>
              <StyledHeader>Bienal</StyledHeader>
              <StyledHeader>Vitalício</StyledHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StyledCell>{filteredAll.mensal}</StyledCell>
              <StyledCell>{filteredAll.trimestral}</StyledCell>
              <StyledCell>{filteredAll.semestral}</StyledCell>
              <StyledCell>{filteredAll.anual}</StyledCell>
              <StyledCell>{filteredAll.bienal}</StyledCell>
              <StyledCell>{filteredAll.vitalicio}</StyledCell>
            </tr>
          </tbody>
        </StyledTable>
      </ClientsContainer>

      <ClientsContainer>
        <Title>Estado dos Pagamentos</Title>
        <StyledTable>
          <thead>
            <tr>
              <StyledHeader>Regular</StyledHeader>
              <StyledHeader>Em Vencimento</StyledHeader>
              <StyledHeader>Vencido</StyledHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StyledCell>{filteredAll.regular}</StyledCell>
              <StyledCell>{filteredAll.emVencimento}</StyledCell>
              <StyledCell>{filteredAll.vencido}</StyledCell>
            </tr>
          </tbody>
        </StyledTable>
      </ClientsContainer>
    </SummaryContainer>
  );
};

export default Summary;
