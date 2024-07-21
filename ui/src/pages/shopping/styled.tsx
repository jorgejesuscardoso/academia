import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SpanShop = styled.span`
  text-align: center;
  background-color: #eee;
  font-size: 0.8rem;
  margin-top: 7.1vh;
  margin-bottom: 3px;
  width: 64%;
  border-radius: 5px;
`;

export const Content = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  height: 82.8vh;
  width: 64%;
  overflow-y: auto;
  overflow-x: hidden;

  h1 {
    margin: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  margin: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ProductCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 10px 5px #ddd;
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 1rem;
  height: 20rem;
  width: 20%;
  max-width: 185px;

  h3 {
    text-align: center;
    font-size: 0.8rem;
  }

  p {
    font-size: 0.8rem;
  }

  p.descript {
    display: block;
    text-align: justify;
    margin: 0.2rem;
    font-size: 0.75rem;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  p.price {
    color: #03539e;
    margin: 0.5rem;
    font-weight: bold;
  }

  img {
    width: 70px;
    height: 70px;
    margin: 0.5rem;
    transition: transform 0.5s;
    cursor: zoom-in;
  }

  button {
    margin: 0.5rem;
    padding: 0.5rem;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: #00af17;
    cursor: pointer;

    &:hover {
      background-color: #00970a;
    }

    &:active {
      background-color: #0e6f0f;
    }
  }
  span {
    margin-top: 0.3rem;
  }

  @media (max-width: 480px) {
    width: 90%;
    max-width: 90%;
    height: 25rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 47%;
    max-width: 90%;
    height: 25rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 48%;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 30%;
  }
`;

export const PageButtonContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  width: 64%;
  gap: 1rem;

  button {
    padding: 0.5rem;
    color: #03539e;
    font-weight: bold;
    border: 1px solid #03539e;
    border-radius: 5px;
    background-color: #ffffff;
    margin: 0.5rem;
    cursor: pointer;

    &:disabled {
      background-color: #c4c4c4;
      color: #ffffff;
      border: 1px solid #c4c4c4;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const PageButton = styled.span`
  padding: 0.5rem;
  color: #03539e;
  font-weight: bold;
  border: 1px solid #03539e;
  border-radius: 5px;
  background-color: dod;
  margin: 0.5rem;
`;