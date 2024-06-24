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
