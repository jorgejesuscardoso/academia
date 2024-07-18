import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 28vw;
  width: 20vw;
  height: 18vh;

  h4 {
    text-align: center;
  }

  @media (max-width: 480px) {
    right: 0;
    width: 100%;

    h4 {
      font-size: 11px;
    }
`;

export const MenuPublicacao = styled.div`
  background-color: #ddd;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  height: 18vh;
  gap: 10px;

  h4 {
    margin: 10px 0;
    color: #555;
  }

  button {
    background-color: dodgerblue;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 35%;
    padding: 7px;
    cursor: pointer;

    &:hover {
      background-color: #0060c0;
    }
    &:active {
      background-color: #004080;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    gap: 10px;
  }

  span {
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 10px;
    color: #555;
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 22vh;
    right: 10vw;

    div {
      width: 50%;
    }

    button {
      width: 70%;
      font-size: 9px;
    }

    h4 {
      font-size: 11px;
      text-align: center;
    }
  }
`;

export const Edit = styled.div`
  position: absolute;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
  border-radius: 10px;
  z-index: 1;
  width: 30vw;
  height: 50vh;
  gap: 10px;

  span {
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 10px;
    color: #555;
  }


  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    gap: 5px;
  }

  label {
    color: #333;
  }

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #555;
    border-radius: 5px;
    outline: none;
  }

  textarea {
    width: 100%;
    height: 30vh;
    padding: 5px;
    border: 1px solid #555;
    border-radius: 5px;
    outline: none;
    resize: none;
  }

  h4 {
    color: #555;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-right: 0;
    height: 50vh;
    gap: 3px;

    div {
      width: 90%;
    }

    input {
      width: 90%;
      font-size: 9px;
      padding: 2px 5px;  

    }

    textarea {
      font-size: 8px;
      padding: 2px 5px;
    }

    span {
      font-size: 8px;
    }

    label {
      font-size: 9px;      
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      height: 25px;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  button {
    background-color: dodgerblue;
    color: #fff;
    border: none;
    border-radius: 5px;
    width: 25%;
    padding: 7px;
    cursor: pointer;

    &:hover {
      background-color: #0060c0;
    }
    &:active {
      background-color: #004080;
    }
  }

  h4 {
      color: #555;
    }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Delete = styled.div`
  position: absolute;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
  border-radius: 10px;
  z-index: 1;
  width: 30vw;
  height: 25vh;
  gap: 10px;

  span {
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 10px;
    color: #555;
  }

 h4 {
    color: #555;
  }
    
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    gap: 5px;
  }

  @media (max-width: 480px) {
    width: 90%;
    gap: 3px;

    div {
      width: 90%;
    }

    span {
      font-size: 8px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9px;
      height: 25px;
    }
  }
`;