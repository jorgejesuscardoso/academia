// style.js
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3px;
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
    font-size: 18px;
    padding: 4px;
    border-bottom: 1px solid #ccc;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 12px;
    }
  }
`;

export const Table = styled.table`
  background-color: #ffffff;
  width: 60%;
  font-size: 13px;
  border-collapse: collapse;
  border: 1px solid #343a40;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 95%;
    font-size: 7px;
  }
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
      width: 27px;
      height: 27px;
      transition: transform 0.4s ease;
      cursor: pointer;
        
      &:hover {
        transform: rotate(90deg);
      }
      }
    }
  }

  @media (min-width: 480px) and (max-width: 768px){
    th {
      padding: 0px 0px;

      &.clientList {
        display: none;
      }
    }
      
    &.clientList {
      display: none;
    }

    span {
      img {
        width: 10px;
        height: 10px;
      }    
    }
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    text-align: center;
    background-color: #ddd;
  }

  td {
    text-align: center;
    padding: 0 15px;
    border-bottom: 1px solid #ddd;
  }

  @media (max-width: 480px) {
    td {
      padding: 0 3px;
    }  
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
    padding: 8px;
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
      background-color: var(--list-hover-color);
      color: #444;
      font-weight: bolder;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    &.descript {
      p {
        font-size: 7px;
        padding: 3px;
      }
    }
    
    &.clientList {
      display: none;
    }
  }
`;

export const Aviso = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 600;
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

  @media (max-width: 480px) {
    margin-top: 10vh;
  }
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
    color: var(--text-h1-color);
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
      outline: 1px solid var(--input-cadastro-border-color);
    }

    textarea {
      width: 100%;
      height: 100px;
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
      border: none;
      outline: 1px solid var(--input-cadastro-border-color);
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
    background-color: #be9c02;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #917e01;
    }
  }

  select {
    outline: 1px solid #be9c02;
  }

  @media (max-width: 480px) {
    width: 95%;
    font-size: 8px;

    label {
      font-size: 9px !important;
      margin-bottom: 3px !important;
    }

    h1 {
      font-size: 12px;
      color: #be9c02;
    }

    input {
      padding: 3px;
      height: 22px !important;
      margin-top: 2px !important;
    }

    select {
      padding: 4px !important;
      height: 22px !important;
    }

    button {
      height: 30px;
      width: 40%;
      padding: 5px !important;
      font-size: 10px !important;
    }

    div {
      margin: 5px;
    }
  }
`;
