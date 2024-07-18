import { styled } from 'styled-components';

export const AsideLeftContainersL = styled.div`
  background-color: #f5f5f5;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  width: 17.3vw;
  height: 90vh;
  top: 10vh;
  left: 0;
  gap: 20px;
  z-index: 100;

    img {
      width: 100px;

    }
  
    /* Telefone Pequeno */
    @media (max-width: 480px) {
      display: none;
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

export const AsideLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  width: 100%;
  height: 100%;
  gap: 10px;

  h3 {
  border-top:1px solid #6b5c37;
  border-bottom:1px solid #6b5c37;
  color: #6b5c37;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  border-radius: 0;
  padding: 2px;
  }

  h3.video {
    background-color: #6b5c37;
    border-radius: 0.35rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

    a {
      color: #fff !important;
    }

    &:hover {
      background-color: #fff;
      border: 1px solid #6b5c37;

      a {
        color: #6b5c37 !important;
      }
    }
  }

  h4 {
    text-align: center;
    margin-top: 10px;
    color: #7e5f10;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    list-style: none;
    padding: 1rem;
    gap: 0.75rem;

    li {
      display: flex;
      align-items: center;
      color: #00366d;
      cursor: pointer;
      width: 80%;
      margin-left: 2rem;
      gap: 1rem;

      &:hover {
        color: #a36f2a;
      }

      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
    
  li.verMais {
    display: inline-block;
    border: 1px solid #cf980b;
    width: 40%;
    margin: 0 auto;
    padding: 3px;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    color: #b48100;
    cursor: pointer;

    &:hover {
      background-color: #aa8118;
      color: #ffffff;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 3px;
    background-color: #f2f2f2;
  }

  a {
    color: #fff !important;
    text-decoration: none;
  }
`;

export const Warnings = styled.h4 `
  color: #999 !important;
  margin-bottom: 20px;
`;

export const VerMais = styled.a`  
  text-align: center;
  width: 60%;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: #cf953e;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: #a15f09;
  }
`;

export const AsideRightContainers = styled.div`
  background-color: #f5f5f5;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  width: 17.3vw;
  height: 90vh;
  top: 10vh;
  right: 0;
  gap: 20px;
  z-index: 100;

  @media (max-width: 480px) {
      display: none;
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

export const AsideRightContent = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 13px;
  width: 100%;
  height: 100%;
  gap: 10px;

  h3 {
  border-top:1px solid #6b5c37;
  border-bottom:1px solid #6b5c37;
  color: #6b5c37;
  text-align: center;
  padding: 3px;
  }

  h4 {
    text-align: center;
    margin-top: 10px;
    color: #7e5f10;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 5px;
    gap: 3px;

    li {
      color: #00366d;
      text-align: center;
      padding: 2px;
      cursor: pointer;

      &:hover {
        color: #a36f2a;
      }
    }
  }
    
  li.verMais {
    width: 40%;
    margin: 0 auto;
    padding: 3px;
    margin-top: 10px;
    text-align: center;
    font-weight: bold !important;
    border-radius: 5px;
    border: 1px solid #cf980b !important;
    color: #b48100;
    cursor: pointer;

    &:hover {
      background-color: #aa8118 !important;
      color: #ffffff;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    gap: 3px;
    background-color: #f2f2f2;
  }

  a {
    text-decoration: none;
  }

  img {
    margin: auto;
    width: 50%;
  }
`;

export const BorderDivision = styled.div `
  width: 100%;
  height: 1px;
  background-color: #6b5c37 !important;
`;

export const AsideLeftWithBorder = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #888888;

  a {
    margin: 5px auto;
  }
`;