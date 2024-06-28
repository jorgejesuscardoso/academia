import { styled } from 'styled-components';

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
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  padding: 2px;
  }

  h3.video {
    cursor: pointer;
    border: 1px solid transparent;
    transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #fff;
      border: 1px solid dodgerblue;

      a {
        color: dodgerblue !important;
      }
    }
  }

  h4 {
    text-align: start !important;
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
    padding: 3px;
    margin-top: 10px;
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
    gap: 3px;
    background-color: #f2f2f2;
  }

  a {
    color: #fff !important;
    text-decoration: none;
  }
`;

export const VerMais = styled.a`  
  text-align: center;
  width: 50%;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: #b89e0d;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin: 10px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: #9c8b8b;
  }
`;

export const AsideRightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 13px;
  width: 100%;
  height: 100%;
  gap: 10px;

  h3 {
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  padding: 3px;
  }

  h3.video {
    cursor: pointer;
    border: 1px solid transparent;
    transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #fff;
      border: 1px solid dodgerblue;

      a {
        color: dodgerblue !important;
      }
    }
  }

  h4 {
    text-align: center;
    margin-right: 20px;
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
    border-bottom: 1px solid #949494;

    li {
      color: #00366d;
      text-align: center;
      padding: 2px;
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
    padding: 3px;
    margin-top: 10px;
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
    justify-content: end;
    width: 100%;
    gap: 3px;
    background-color: #f2f2f2;
  }

  a {
    color: #fff !important;
    text-decoration: none;
  }

  img {
    width: 100%;
  }
`;

export const AsideLeftWithBorder = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #888888;

  a {
    margin: 10px auto;
  }
`;