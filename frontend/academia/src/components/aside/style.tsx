import { styled } from 'styled-components';

export const AsideLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;

  h3 {
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 0.5rem;
  }

  h4 {
    margin-top: 10px;
    color: #7e5f10;
  }

  ul {
    width: 100%;
    list-style: none;
    padding: 5px;
    border-bottom: 1px solid #949494;

    li {
      color: #00366d;
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        color: #ff0000;
      }
    }
  }
    
  li.verMais {
    background-color: dodgerblue;
    width: 40%;
    margin: 0 auto;
    padding: 1px;
    margin-top: 5px;
    text-align: center;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      background-color: #0000ff;
      color: #ffffff;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 0.5rem;
  }  
`;

export const VerMais = styled.a`  
  text-align: center;
  width: 50%;
  text-decoration: none;
  color: #fff;
  background-color: #00681f;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-top: 1rem;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: #004d14;
  }
`;

export const AsideRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;

  h3 {
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 0.5rem;
    margin-top: 10px;
  }

  h4 {
    margin-top: 10px;
    color: #7e5f10;
  }

  ul {
    width: 100%;
    list-style: none;
    padding: 2px;
    border-bottom: 1px solid #949494;

    li {
      color: #00366d;
      margin-left: 10px;
      cursor: pointer;

      &:hover {
        color: #ff0000;
      }
    }
  }
    
  li.verMais {
    background-color: dodgerblue;
    width: 40%;
    margin: 0 auto;
    padding: 1px;
    margin-top: 5px;
    text-align: center;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      background-color: #0000ff;
      color: #ffffff;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 0.5rem;
  }

  img {
    width: 100%;
  }
`;