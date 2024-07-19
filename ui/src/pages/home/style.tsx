// style.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e6e6e6;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TextArea = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  margin-bottom: 20px;
  border: 1px solid #a1a1a1;
  border-radius: 8px;
  width: 82%;
  height: 35vh;

  textarea {
    width: 99%;
    height: 73%;
    font-size: 14px;
    color: #333;
    padding: 10px;
    margin-bottom: 2px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    resize: none;

    &::placeholder {
      font-size: 14px;
      color: #aaa;
    }
    
    
  }

  input {
    background-color: #f9f9f9;
    padding: 3px 5px;
    width: 95%;
    color: #555;
    text-align: start;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    outline: none;
    border: none;
    border-radius: 5px;

    &:disabled {
      display: none;
    }

    &::placeholder {
      color: #a7a7a7;
    }
  }

  input#img {
    display: none;
  }

  label {
    margin-left: 10px;
    font-size: 14px;
    border-radius: 5px;
    color: #47565f;
  }

  label#imge {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    padding: 5px;
    height: 80%;
    border: none;
    color: #1c252b;
    cursor: pointer;

    img {
      width: 40px;
    }
  }

  div {
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 14%;
  }

  div.title-descript {
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cecece;
    width: 100%;
    height: 10%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    color: dodgerblue;
    font-weight: bold;
    border: 1px solid dodgerblue;
    border-radius: 5px;
    margin: 0 5px;
    padding: 8px 15px;
    height: 80%;
    cursor: pointer;

    &:hover {
      border: 1px solid #0060c0;
      color: #0060c0;
      font-weight: bold;
    }
  }

  button.clear {
    background-color: #ffffff;
    color: #a34646;
    font-weight: bold;
    border: 1px solid #a34646;
    border-radius: 5px;
    margin: 0 5px;
    padding: 8px 15px;
    height: 80%;
    cursor: pointer;

    &:hover {
      border: 1px solid #ff0000;
      color: #ff0000;
      font-weight: bold;
    }
  }

  select {
    background-color: #ffffff;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #99b2c0;
    color: #70828d;
    outline: none;
    height: 80%;
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      color: #47565f;
      border: 1px solid #99b2c0;
    }
  }

  @media (max-width: 480px) {
      width: 95%;
      height: 30vh;

      select {
        width: 40%;
      }

      textarea {
        width: 100%;
        height: 70%;
        font-size: 8px;

        &::placeholder {
          font-size: 8px;
        }
      }

      label {
        display: none;
      }

      div {
        height: 13%;
      }

      div.title-descript {
        height: 8%;
      }

      button {
        padding: 7px 5px;
        font-size: 7px;
      }

      button.clear {
        padding: 7px 5px;
      }

      input {
        width: 90%;
        font-size: 10px;
        background-color: transparent;
      }

      input#img {
        height: 10%;
        border: none;
        background-color: transparent;
      }

      label#imge {
        display: flex;
        background-color: transparent;
        border: none;
        align-items: center;
        justify-content: center;
        padding: 5px 5px;
        font-size: 7px;

        img {
          width: 30px;
          background-color: transparent;
        }
      }        
  }

  @media (min-width: 481px) and (max-width: 768px) {
      width: 100%;

      select {
        padding: 1px;
        width: 40%;
      }

      textarea {
        width: 100%;
        height: 70%;
        font-size: 10px;

        &::placeholder {
          font-size: 10px;
        }
      }

      label {
        display: none;
      }

      div {
        height: 13%;
      }

      div.title-descript {
        height: 8%;
      }

      button {
        padding: 9px 7px;
        font-size: 10px;
      }

      button.clear {
        padding: 9px 7px;
      }

      input {
        width: 90%;
        font-size: 10px;
        background-color: transparent;
      }

      input#img {
        height: 10%;
      }

      label#imge {
        display: flex;
        align-items: center;
        justify-content: center;        
        padding: 5px 5px;
        font-size: 7px;

        img {
          width: 30px;
          height: 30px;
        }
      }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 82%;

    select {
      padding: 1px;
      width: 20%;
    }

    textarea {
      width: 100%;
      height: 68%;
      font-size: 10px;

      &::placeholder {
        font-size: 10px;
      }
    }

    label {
      display: none;
    }

    div {
      height: 20%;
    }

    div.title-descript {
      height: 12%;
    }

    button {
      padding: 10px;
      font-size: 10px;
    }

    input {
      width: 90%;
      font-size: 10px;
      background-color: transparent;
    }

    input#img {
      height: 10%;
    }

    label#imge {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 5px;
      font-size: 7px;

        img {
          width: 40px;
          height: 40px;
        }
    }
  }

  @media (min-width: 1025px) and (max-width: 1400px) {
    width: 82%;

    select {
      padding: 1px;
      width: 20%;
    }

    textarea {
      width: 100%;
      height: 68%;
      font-size: 10px;

      &::placeholder {
        font-size: 10px;
      }
    }

    label {
      display: none;
    }

    div {
      height: 20%;
    }

    div.title-descript {
      height: 12%;
    }

    button {
      padding: 10px;
      font-size: 10px;
    }

    input {
      width: 90%;
      font-size: 10px;
      background-color: transparent;
    }

    input#img {
      height: 10%;
    }

    label#imge {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 5px;
      font-size: 7px;

        img {
          width: 45px;
          height: 45px;
        }
    }
  }

  @media (min-width: 1401px) and (max-width: 1599px) {
    width: 82%;

    select {
      width: 20%;
    }

    textarea {
      width: 100%;
      height: 68%;
      font-size: 10px;

      &::placeholder {
        font-size: 10px;
      }
    }

    label {
      display: none;
    }

    div {
      height: 17%;
    }

    div.title-descript {
      height: 12%;
    }

    button {
      padding: 1em;
      font-size: 1em;
    }

    input {
      width: 90%;
      font-size: 10px;
      background-color: transparent;
    }

    input#img {
      height: 10%;
    }

    label#imge {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 5px;
      font-size: 7px;

        img {
          width: 3vw;
          height: 6vh;
        }
    }
  }
`;

export const DivDataNewevent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100% !important;
  width: 20% !important;

  label {
    color: #333;
    font-size: 14px;
    width: 50%;
  }

  input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    font-size: 14px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
      input {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 45%;
        height: 100%;
        margin-left: 5px;
      }
    }

    /* Telefone Médio e Grande */
    @media (min-width: 481px) and (max-width: 800px) {
      /* Estilos para telefones médios e grandes */
    }

    /* Tablet em modo retrato */
    @media (min-width: 601px) and (max-width: 800px) {
      /* Estilos para tablets em modo retrato */
    }

    /* Tablet em modo paisagem */
    @media (min-width: 801px) and (max-width: 1280px) {
      /* Estilos para tablets em modo paisagem */
    }

    /* Laptop e Desktop Pequeno */
    @media (min-width: 1025px) and (max-width: 1280px) {
      /* Estilos para laptops e desktops pequenos */
    }

    /* Desktop Médio */
    @media (min-width: 1281px) and (max-width: 1440px) {
      /* Estilos para desktops médios */
    }

    /* Desktop Grande */
    @media (min-width: 1441px) and (max-width: 2560px) {
      /* Estilos para desktops grandes */
    }

    /* 4K e Ultra-Wide */
    @media (min-width: 2561px) {
      /* Estilos para telas 4K e ultra-wide */
    }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65vw;
  margin-top: 11.5vh;

  @media (max-width: 1024px) {
    width: 95vw;
  }
`;

export const SearchCardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row !important;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 55vw;
  padding: 20px;

  @media (max-width: 1024px) {
      padding: 5px;
      width: 95%;
  }
`;

export const SearchInfoSection = styled.div`
  position: fixed;
  background-color: #eee;
  display: flex;
  width: 100vw;
  top: 7vh;
  padding: 3px;
  gap: 30px;
  z-index: 100;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    strong {
      color: #7c7c7c;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
      display: none;
    }

    @media (min-width: 481px) and (max-width: 768px) {
      display: none;
    }
`;

export const Labels = styled.p`
  margin-left: 10px;
  color: #444;
  font-size: 13px;
`;

export const Value = styled.strong`
  color: #333;

  span {
    display: inline-block;
    text-align: center;
    background-color: green;
    color: white;
    width: 50px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

// Feed

export const NewsCardContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column !important;
  border-radius: 8px;
  margin-bottom: 10px;
  width: 82%;
  padding: 20px;

  span {
    color: #333;
    font-size: 12px;  
  }

  @media (max-width: 480px) {
      width: 95%;
      span {
        font-size: 6px;
      }
    }

    @media (min-width: 481px) and (max-width: 768px) {
      width: 100%;
      span {
        font-size: 8px;
      }    
    }
`;

export const CardTitle = styled.h2`
  text-align: center;
  color: #333333;
  font-size: 18px;
  max-width: 95%;
  margin: 20px 0 10px 0;

  @media (max-width: 480px) {
    font-size: 11px;
  }

    /* Telefone Médio e Grande */
    @media (min-width: 481px) and (max-width: 800px) {
      /* Estilos para telefones médios e grandes */
    }

    /* Tablet em modo retrato */
    @media (min-width: 601px) and (max-width: 800px) {
      /* Estilos para tablets em modo retrato */
    }

    /* Tablet em modo paisagem */
    @media (min-width: 801px) and (max-width: 1280px) {
      /* Estilos para tablets em modo paisagem */
    }

    /* Laptop e Desktop Pequeno */
    @media (min-width: 1025px) and (max-width: 1280px) {
      /* Estilos para laptops e desktops pequenos */
    }

    /* Desktop Médio */
    @media (min-width: 1281px) and (max-width: 1440px) {
      /* Estilos para desktops médios */
    }

    /* Desktop Grande */
    @media (min-width: 1441px) and (max-width: 2560px) {
      /* Estilos para desktops grandes */
    }

    /* 4K e Ultra-Wide */
    @media (min-width: 2561px) {
      /* Estilos para telas 4K e ultra-wide */
    
  }
`;

export const CardAuthor = styled.h4`
  color: #666666;
  font-size: 12px;
  padding-bottom: 7px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 480px) {
    font-size: 6px;
  }

    /* Telefone Médio e Grande */
    @media (min-width: 481px) and (max-width: 800px) {
      /* Estilos para telefones médios e grandes */
    }

    /* Tablet em modo retrato */
    @media (min-width: 601px) and (max-width: 800px) {
      /* Estilos para tablets em modo retrato */
    }

    /* Tablet em modo paisagem */
    @media (min-width: 801px) and (max-width: 1280px) {
      /* Estilos para tablets em modo paisagem */
    }

    /* Laptop e Desktop Pequeno */
    @media (min-width: 1025px) and (max-width: 1280px) {
      /* Estilos para laptops e desktops pequenos */
    }

    /* Desktop Médio */
    @media (min-width: 1281px) and (max-width: 1440px) {
      /* Estilos para desktops médios */
    }

    /* Desktop Grande */
    @media (min-width: 1441px) and (max-width: 2560px) {
      /* Estilos para desktops grandes */
    }

    /* 4K e Ultra-Wide */
    @media (min-width: 2561px) {
      /* Estilos para telas 4K e ultra-wide */
    }
`;

export const CardContent = styled.p`
  color: #555;
  font-size: 14px;
  line-height: 1.6;
  max-width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0 3%;

  @media (max-width: 480px) {
    font-size: 7px;
  }
`;

export const CardContentImg = styled.img`
  width: 50%;
  max-height: 45vh;
  min-height: 15vh;
  height: auto;
  border-radius: 10px;
  margin: auto;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CardLink = styled.a`
  color: dodgerblue;
  display: block;
  margin-top: 10px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

export const CardPublishedAt = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  color: #5f5f5f;
  font-size: 12px;
  margin: 35px auto;
  margin-bottom: 0;

  span {
    color: #777;
  }

  @media (max-width: 480px) {
    font-size: 6px;
    margin-top: 10px;
    width: 100%;
  }
`;

export const CardSpanContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 17px;
    height: 17px;
    cursor: pointer;
    transition: transform 0.4s ease;
      
    &:hover {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 480px) {
    img {
      width: 12px;
      height: 12px;
    }
  }
`;

export const CardContentAligned = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;


