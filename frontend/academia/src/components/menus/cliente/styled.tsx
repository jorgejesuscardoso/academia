import styled from 'styled-components';

export const MenuClienteContainer = styled.div`
  background-color: var(--background-menu);
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 20vw;
  height: 50vh;
  top: 11vh;
  right: 8vw;

    h4 {
      color: var(--menu-title-color);
      margin-bottom: 10px;
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
  width: 30vw;
  height: 20vh;
  gap: 10px;

    p {
      text-align: center;
      color: var(--menu-title-color);
      margin-bottom: 30px;
    }

    main {
      width: 100vw;
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