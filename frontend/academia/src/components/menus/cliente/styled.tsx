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
`;

/* EditMenuContaienr */

export const EditMenuContaienr = styled.div`
  position: absolute;
  background-color: var(--background-menu);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 10px;
  padding: 20px;
  width: 20vw;

    h4 {
      margin-top: 10px;
      color: var(--menu-title-color);
    }

    form {
      display: flex;
      flex-direction: column;

        label {
          color: var(--menu-title-color);
          font-size: 0.8rem;
        }

        input {
          width: 200px;
          height: 25px;
          border: 1px solid var(--menu-button-background);
          border-radius: 5px;
          margin-bottom: 10px;
          padding-left: 5px;

          &:focus {
            outline: 1px solid var(--menu-button-background);
          }
        }

        button {
          width: 100px;
          height: 30px;
          border: none;
          color: var(--menu-button-text-color-2);
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
        }

        select {
          width: 200px;
          height: 25px;
          border: 1px solid var(--menu-button-background);
          border-radius: 5px;
          margin-bottom: 10px;
          padding-left: 5px;

            option {
              color: var(--text-color);
              font-weight: bold;
              background-color:  white;
              
              &:hover {
                background-color: var(--background-menu);
                color: var(--menu-button-hover-text-color);
            }
          }

        }
    }
`;