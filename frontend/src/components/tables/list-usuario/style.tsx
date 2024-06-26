import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  background-color: #fff;
  width: 65%;
  height: 99vh;
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;

  h1 {
    margin-top: 7vh;
    color: #917e01;
    width: 60%;
    border-radius: 5px 5px 0 0;
    text-align: center;
    font-size: 18px;
    padding: 4px;
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
  color: #fff;
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
    color: #000079;
  }

  tr:hover {
    text-align: center;
    background-color: var(--list-hover-color);
  }

  td {
    text-align: center;
    padding: 0 15px;
    border-bottom: 1px solid #ddd;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f3f3f3;
  }
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
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px;
  width: 90%;
  gap: 10px;

  h2 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #343a40;
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

/* Cadastrar usuario */

export const ContainerCadastroUsuario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const FormCadastroPlano = styled.form`
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 30%;
  padding: 10px;
  margin-top: 10vh;
  font-size: 15px;
  font-weight: 400;
  gap: 10px;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 70%;

    label {
      font-size: 16px;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
      border: none;
      outline: 1px solid #b19103;
    }

    &.btn {
      justify-content: space-around;
    }
  }

  select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: none;
    outline: 1px solid #be9c02;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100;

  button {
  width: 30%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  background-color: #be9c02;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  }
`;