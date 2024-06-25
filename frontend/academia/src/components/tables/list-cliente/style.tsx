// style.js
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;
  font-size: 14px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: #343a40;
  color: #fff;

  th {
    text-align: center;
    padding: 12px 15px;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    text-align: center;
    background-color: #f2f2f2;
  }

  tr:hover {
    text-align: center;
    background-color: #ddd;
  }

  td {
    text-align: center;
    padding: 12px 15px;
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
  padding: 12px 15px;
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
    font-size: 12px;

    &.success {
      color: #066806;
      font-weight: 550;
    }

    &.error {
      text-align: start;
      color: red;
      font-weight: 550;
    }

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
  background-color: #f8f9fa;
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
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border: 1px solid #007bff;
    }
  }

  select {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border: 1px solid #007bff;
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
    background-color: #007bff;
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