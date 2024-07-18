import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  width: 65%;
  height: 100vh;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;

  h1 {
    margin-top: 6.4vh;
    background-color: #fff;
    color: #917e01;
    width: 100%;
    border-radius: 5px 5px 0 0;
    text-align: center;
    padding: 4px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
  }
`;

export const Table = styled.table`
  background-color: #d5d8da;
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: #343a40;
  color: #ffffff;
  font-weight: 600;

  th {
    text-align: center;
    padding: 12px 15px;
  }
`;

export const TableBody = styled.tbody`
  tr {
    text-align: center;
    background-color: #ffffff;
    color: var(--text-color-2);
  }

  tr:hover {
    text-align: center;
    background-color: var(--list-hover-color);
    color: blue;
  }

  td {
    text-align: center;
    padding: 0 15px;
    border-bottom: none;
  }
`;

export const TableRow = styled.tr`
 border: 1px solid #ccc
`;

export const TableCell = styled.td`
  text-align: center;
  border-bottom: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
  width: 100px;
  height: 30px;
  padding: 12px 15px;

  select {
    text-align: center;
    background-color: dodgerblue;
    width: 100%;
    height: 100%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    outline: none;
    cursor: pointer;

    option {
      background-color: dodgerblue;
      color: #fff;
      font-weight: 600;
      border-radius: 5px;
      padding: 3px;
      font-size: 14px;
    }

    &:hover {
      color: #00ff00;
      font-weight: bolder;
    }
  }
`;

export const InstrutorContainer = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  gap: 10px;

  h2 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #778;
  }

  table {
    width: 30%;
    border-collapse: collapse;
  }
`;

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
  padding: 8px;
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
  font-size: 1.5em;
  margin-bottom: 15px;
`;

export const DivOverFlowTable = styled.div`
  display: flex;
  height: 65vh;
  width: 100%;
  margin-bottom: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
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

/* Cadastro de Instrutores */

export const MainCadastroDeInstrutores = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
`;

export const FormCadastroDeInstrutores = styled.form`
  background-color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 10px;

  h2 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #343a40;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 5px 0;

    label {
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      height: 30px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      outline: 1px solid #be9c02;
    }

    select {
      width: 100%;
      height: 30px;
      padding: 5px;
      border-radius: 5px;
      border: none;
      outline: 1px solid #be9c02;
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  width: 70%;
  margin-top: 10px;

  button {
    width: 40%;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #be9c02;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    outline: none;
  }
`;