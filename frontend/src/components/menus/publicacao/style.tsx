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
`;

export const MenuPublicacao = styled.div`
  background-color: #ddd;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  right: 0;
  top: 0;
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

  span {
    background-color: #fff;
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 10px;
    color: #555;
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
    background-color: #fff;
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
`;