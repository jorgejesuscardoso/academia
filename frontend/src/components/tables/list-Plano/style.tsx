// style.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 13px;
  font-weight: 400;

  h1 {
    margin-top: 7vh;
    color: #917e01;
    width: 60%;
    border-radius: 5px 5px 0 0;
    text-align: center;
    padding: 3px;
    border-bottom: 1px solid #ccc;
  }
`;

export const Table = styled.table`
  background-color: #ffffff;
  width: 60%;
  font-size: 13px;
  border-collapse: collapse;
  border: 1px solid #343a40;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: #343a40;
  color: #fff;

  th {
    width: 100px;
    text-align: center;
    padding: 0px 15px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0 auto;
    }

    p {
      width: 100%;
    }
    
    span {
      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    text-align: center;
    background-color: #eee;
  }

  td {
    text-align: center;
    padding: 0 15px;
    border-bottom: 1px solid #ddd;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #535252;
  }
`;

export const TableCell = styled.td`
  border-bottom: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
  width: 100px;

  select {
    text-align: center;
    background-color: #eee;
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    color: #5a5a5a;
    font-weight: bolder;
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
      background-color: #ddd;
      font-weight: bolder;
    }
  }
`;

export const Aviso = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 700;
`;

export const AvisoSuccess = styled.p`
  color: green;
  font-size: 16px;
  font-weight: 700;
`;

/* Form cadastramento de novo plano */

export const ContainerCadastroPlano = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  padding: 10px;
`;

export const ContentCadastroPlano = styled.div`
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
  font-size: 15px;
  font-weight: 400;

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px;
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
      outline: 1px solid #62d3ff;
    }

    textarea {
      width: 100%;
      height: 100px;
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
      border: none;
      outline: 1px solid #62d3ff;
      resize: none;
    }

    &.btn {
      justify-content: space-around;
    }
  }

  button {
    width: 30%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: dodgerblue;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    outline: none;
  }
`;
