import styled from 'styled-components';

export const ContainerRemove = styled.div`
  background-color: #fff;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  width: 30vw;
  height: 40vh;

  span {
    
    width: 30px;
    height: 30px;
  }

  h3 {
    margin: 10px;
  }

  strong {
    color: blue;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    gap: 10px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45%;
      border: none;
      cursor: pointer;
      outline: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 30px;
      padding: 5px;
      border-radius: 5px;
    }
  }

  input {
    width: 50%;
    height: 30px;
    border-radius: 5px;
    margin-top: 50px;
    padding: 5px;
    border: 1px solid #61c0ff;
    outline: none;
  }
`;

export const ContainerModify = styled.div`
  background-color: #fff;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  width: 30vw;
  height: 55vh;

  span {
    width: 30px;
    height: 30px;
  }

  h3 {
    margin: 10px;
  }

  strong {
    color: blue;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    gap: 10px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45%;
      border: none;
      cursor: pointer;
      outline: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 30px;
      padding: 5px;
      border-radius: 5px;
    }
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px;
    border: 1px solid #61c0ff;
    outline: none;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 60%;

    textarea {
      width: 100%;
      height: 10vh;
      border-radius: 5px;
      margin-top: 10px;
      padding: 5px;
      border: 1px solid #61c0ff;
      outline: none;
      resize: none;
    }

    label {
      font-size: 1rem;
      margin-top: 15px;
    }
  }
`;

export const ContainerConfirmModify = styled.div`
  background-color: #fff;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  color: #3b3b44;
  width: 35vw;
  height: 80vh;

  th.wt {
    width: 22%;
  }

  span {
    width: 30px;
    height: 30px;
  }

  h3 {
    margin: 10px;
  }

  strong {
    color: #3b3b44;
    font-size: 1rem;
  }  
`;

export const DivUlPlanos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      background-color: #3b3b44;
      border: 1px solid #3b3b44;
      color: #fff;
      padding: 10px;
    }

    td {
      border: 1px solid #a8a8a8;
      padding: 10px;
    }
  
  }
`;

export const UlConfirmModify = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  gap: 10px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    border: none;
    cursor: pointer;
    outline: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
  }  
`;
