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

  h1 {
    margin: 1rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  margin: 1rem;
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
  height: 30rem;
  width: 24%;

  h3 {
    text-align: center;
  }

  p {
    margin: 0.2rem;
  }

  p.descript {
    text-align: justify;
    margin: 0.2rem;
    font-size: 0.8rem;
  }

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
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