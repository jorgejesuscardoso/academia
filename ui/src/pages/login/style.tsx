import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-login);

  h3 {
    text-align: center;
    color: #a78d1d;
    margin-top: 20px;
    margin: 10px;
  }

  p {
    color: #8f9e07;
    font-weight: bold;
    text-align: center;
  }    

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    width: 20vw;
    height: 60vh;

    input {
      vertical-align: bottom;
      background-color: transparent;
      color: var(--text-color);
      width: 80%;
      height: 50px;
      padding: 10px;
      color: #555;
      font-size: 1rem;
      border: none;
      
      &::placeholder {
        color: #777;
      }

      &:focus {
        background-color: none;
        outline: none;
      }
    }

    div {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: end;
      border-bottom: 1px solid #aaa;

      label {
        text-align: start;
        color: #777;
      } 
    }

    button {
        background-color: #c4a707;
        color: white;
        width: 80%;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-weight: bolder;
        font-size: 1rem;
        cursor: pointer;
      }

    img {
      margin: 10px;
      width: 35%;
    }
  }

  @media (max-width: 640px) {
    form {
      width: 90vw !important;
      height: 65vh !important;

      img {
        width: 50%;
      }

      button {
        width: 70%;
      }

      input {
        width: 100%;
      }

      label {
        font-size: 0.85rem;
      }

      div {
        width: 70%;
      }
    }
  }

  @media (max-width: 1024px) {
    form {
      width: 60vw;
      height: 47vh;

      button {
        width: 70%;
      }

      input {
        width: 100%;
      }

      label {
        font-size: 0.85rem;
      }

      div {
        width: 70%;
      }
    }
  }

  @media (max-width: 1599px) {
    form {
      width: 35vw;
      height: 55vh;

      button {
        width: 70%;
      }

      input {
        width: 100%;
      }

      label {
        font-size: 0.85rem;
      }

      div {
        width: 70%;
      }
    }
  }
`;
