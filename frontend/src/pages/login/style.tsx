import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-login);

  h1 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-login-form);
    border-radius: 10px;
    width: 30vw;
    height: 60vh;

    input {
      background-color: var(--background-login-input);
      color: var(--text-color);
      width: 80%;
      margin: 10px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      
      &::placeholder {
        color: var(--text-color);
      }

      &:focus {
        outline: 1px solid var(--input-login-outline);
      }
    }

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    img {
      width: 25%;
      margin-bottom: 20px;
    }

    button {
      color: var(--text-color-black-1);
      width: 80%;
      margin: 10px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
    }

    p {
      background-color: transparent;
    }
  }
`;