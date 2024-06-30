import { styled } from 'styled-components';

export const StreamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;

    button, select {
      margin: 10px;
      padding: 10px;
      background-color: #ff0000;
      color: #ffffff;
      font-weight: bold;
      border: 1px solid #f7f7f7;
      border-radius: 10px;
      outline: none;
      cursor: pointer;

      &:hover {
        background-color: #000;
        color: #fff;
      }

      &:disabled {
        background-color: #777;
        color: #333;
        border: 1px solid #999;
        cursor: not-allowed;
      }
    }
  }

  iframe {
    width: 60vw;
    height: 60vh;
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 1.3rem;
    }
    
    div {
      width: 100%;
    }

    iframe {
      margin-top: 15px;
      width: 95%;
      height: 50vh;
    }

  }
`;

export const SelectSeriesContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  color: #fff;

  select {
    gap: 10px;
    option {
      color: #ffffff;
      font-size: 1rem;
      font-weight: bold;
      padding: 10px;
    }
  }
`;
