import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7vh;
  padding: 0 20px;
  color: #fff;
  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  max-width: 2200px;
  height: 100%;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    height: 25px;
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: 2px solid var(--border-bottom-color);
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  li:hover {
    border-bottom: 2px solid var(--border-bottom-color);
    cursor: pointer;
  }

  img {
    width: 7vh;  
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 100%;

  input {
    background-color: #eee;
    width: 100%;
    height: 50%;
    padding: 5px;
    border: none;
    border-left: 1px solid #aaa;
    outline: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 50%;
    background-color: #ffd012;
    border: 1px solid #ffcc11;
    border-radius: 0 5px 5px 0;
    outline: none;
    cursor: pointer;
  }

  img {
    width: 20px;
  }

  select {
    width: 120px;
    height: 50%;
    padding: 5px;
    border: none;
    border-left: 1px solid #aaa;
    outline: none;  
    cursor: pointer;
  }
`;

export const FloatMenu = styled.div`
  background-color: var(--float-menu);
  position: absolute;
  font-size: 14px;
  top: 7vh;
  right: 2.5vw;
  width: 10vw;
  gap: 0;
  z-index: 1;

  ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  li:hover {
    background-color: var(--float-menu-hover);
    cursor: pointer;
  }
`;