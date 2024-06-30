import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;

  h1 {
    margin-top: 7vh;
    background-color: #fff;
    color: #917e01;
    width: 65%;
    border-radius: 5px 5px 0 0;
    text-align: center;
    padding: 4px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DivOverFlowTable = styled.div`
  display: flex;
  height: 65vh;
  width: 65%;
  margin-bottom: 7px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 10px;
    cursor: grabbing;
  }

  &::-webkit-scrollbar-track {
    background-color: #969595;
  }
`;

export const TableHead = styled.thead`
  background-color: #343a40;
  color: #fff;
  margin-top: 18vh;
  width: 100%;

  th {
    text-align: center;
    padding: 12px 15px;
  }
`;

export const TableBody = styled.tbody`
  margin-bottom: 100px;

  tr:nth-child(even) {
    background-color: #fff;
  }

  tr:hover {
    background-color: var(--list-hover-color);
  }

  tr.vencido {
    background-color: #ffbaba !important;
    color: var(--text-color-error-2);

    &:hover {
      background-color: #00f9ff !important;
    }
  }

  tr.desativado {
    background-color: #a7d3ff !important;
    color: #002d5a;

    &:hover {
      background-color: #00f9ff !important;
    }
  }

  tr.vitalicio {
    background-color: #baffba !important;
    color: var(--text-color-success-2);

    &:hover {
      background-color: #00f9ff !important;
    }
  }

  tr.alert {
    background-color: #ffffba !important;
    color: var(--text-color-success-2);

    &:hover {
      background-color: #00f9ff !important;
    }
  }

  td {
    text-align: center;
    padding: 7px 15px;
    border-bottom: 1px solid #ddd;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const TableCell = styled.td`
  border-bottom: 1px solid #ddd;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;

    svg {
      color: #777;
    }  

    button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #007bff;
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    font-size: 13px;

    &:hover {
      background-color: transparent;
    }
  }

  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  }
`;

/* *** CadastroDeCliente.tsx *** */

export const MainCadastroClientes = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
`;

export const FormCadastro = styled.form`
  background-color: var(--background-form-cadastro-cliente);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 10px;
  width: 30%;
  margin: 15px;
  margin-top: 10vh;

  h1 {
    font-size: 20px;
    margin: 10px 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
  }

  label {
    text-align: start;
    margin-top: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: none;
    outline: 1px solid #be9c02;

    &:focus {
      border: 1px solid #be9c02;
    }
  }

  select {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    outline: 1px solid #be9c02;

    &:focus {
      border: 1px solid #be9c02;
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    width: 30%;
    padding: 10px;
    margin: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    background-color: #be9c02;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const DivMsg = styled.div`
  background-color: var(--background-form-cadastro-cliente-2);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 12vh;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  top: 30vh;

  span {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  p {
    font-size: 16px;
    color: var(--text-color-success-2);
  }
`;





/*summary.tsx*/
export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 65%;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SummaryTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 14px;
  color: #343a40;
`;

export const ColorLegend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;

  &.yellow {
    background-color: yellow;
  }

  &.green {
    background-color: green;
  }

  &.blue {
    background-color: blue;
  }

  &.red {
    background-color: red;
  }

  &.white {
    background-color: #ffffff;
    border: 1px solid #ddd;
  }
`;

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    margin-bottom: 15px;
    font-size: 14px;
    color: #343a40;
  }
`;


/* plans */

export const TableContainer = styled.div`
  margin-top: 20px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledHeader = styled.th`
  background-color: #202842;
  color: #fff;
  padding: 5px;
  text-align: center;
  border: 1px solid #aaa;
`;

export const StyledCell = styled.td`
  padding: 8px;
  text-align: center;
  border: 1px solid #aaa; 
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1em;
  margin-bottom: 15px;
`;
