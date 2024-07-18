import styled from 'styled-components';

export const EditMenuContaienr = styled.div`
  position: absolute;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #bbb;
  border-radius: 7px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  padding: 20px;
  width: 20vw;

    h4{
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
          border: 1px solid var(--menu-button-background-2);
          border-radius: 5px;
          margin-bottom: 10px;
          padding-left: 5px;

          &:focus {
            outline: none;
          }
        }

        button {
          width: 100px;
          height: 30px;
          margin: 5px;
          border: none;
          color: var(--menu-button-text-color-2);
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
        }

        select {
          width: 200px;
          height: 25px;
          border: 1px solid var(--menu-button-background-2);
          border-radius: 5px;
          margin-bottom: 10px;
          padding-left: 5px;

            option {
              color: var(--menu-button-background-2);
              font-weight: bold;
              background-color:  white;
              
              &:hover {
                background-color: var(--menu-button-background-2);
                color: var(--menu-button-hover-text-color);
            }
          }

        }
    }

  @media (max-width: 480px) {
    width: 100%;

    form {
      width: 100%;
      font-size: 0.8rem;

      label {
        font-size: 0.6rem;
      }

      input {
        width: 100%;
        height: 17px;
        font-size: 0.6rem;
      }

      div {
        width: 100%;
      }

      button {
        width: 40%;
        height: 20px;
        font-size: 0.6rem;
      }

      select {
        width: 100%;
        height: 17px;
        font-size: 0.6rem;
      }

      div {
        width: 100%;
      }

      button {
        width: 40%;
        height: 20px;
        font-size: 0.6rem;
      }

      select {
        width: 90%;
      }
    }
`;