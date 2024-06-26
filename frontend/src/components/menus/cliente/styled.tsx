import styled from 'styled-components';

export const MenuClienteContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 15px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 20vw;
  height: 40vh;
  top: 25vh;
  right: 35vw;

    h4 {
      color: var(--menu-title-color);
      margin-bottom: 30px;

        p {
          text-align: center;
          color: var(--menu-title-color);
          margin-top: 10px;
          color: darkgreen;
        }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          width: 200px;
          height: 35px;
          background-color: dodgerblue;
          border: none;
          color: var(--menu-button-text-color);
          border-radius: 5px;
          cursor: pointer;

          &:hover {
            background-color: #006eff;
          }
        }
      }
    }

  span {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
`;

export const ConfirmDeleteContainer = styled.div`
  position: absolute;
  background-color: var(--background-menu-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 30vw;
  height: 30vh;
  gap: 10px;

    p {
      text-align: center;
      color: var(--menu-title-color);
      margin-bottom: 30px;
    }

    main {
      width: 100%;
      height: 10vh;
    }

    button {
      width: 100px;
      height: 30px;
      background-color: var(--menu-button-background);
      border: none;
      color: var(--menu-button-text-color);
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: var(--menu-button-hover-background);
        color: var(--menu-button-hover-text-color);
      }
    }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  gap: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 30vw;
  height: 10vh;
`;

export const ShowDataCliente = styled.div`
  position: absolute;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 50px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  right: 0vw;
  width: 40vw;
  height: 40vh;
  gap: 10px;

    p {
      text-align: center;
      color: var(--menu-title-color);
      margin-bottom: 30px;
    }

    main {
      width: 100%;
      height: 60%;
    }

    button {
      width: 100px;
      height: 30px;
      background-color: dodgerblue;
      border: none;
      color: var(--menu-button-text-color);
      border-radius: 5px;
      margin: 0 auto;
      cursor: pointer;

      &:hover {
        background-color: var(--menu-button-hover-background);
        color: var(--menu-button-hover-text-color);
      }
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 10px;
      width: 90%;
      height: 25%;
      gap: 10px;      
    }
`;