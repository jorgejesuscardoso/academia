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

  a.cart {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 30px;
    cursor: pointer;

    img {
      width: 100%;    
    }
  }
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
    cursor: pointer;
    width: 7vh;  
  }    

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const SearchForm = styled.form`
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

  @media (max-width: 1023px) {
    width: 70%;

    select {
      width: 80px;
      padding: 2px;
    }
    
    button {
      width: 30px;
      img {
        width: 20px;
      }
    }

    input {
      width: 70%;
    }
  }
`;

export const FloatMenu = styled.div`
  background-color: var(--float-menu);
  position: absolute;
  border-bottom: 1px solid transparent;
  font-size: 14px;
  top: 7vh;
  right: 2.5vw;
  width: 10vw;
  gap: 0;
  z-index: 1000 !important;

  ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid transparent;
    height: 30px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  li:hover {
    background-color: var(--float-menu-hover);
    border-bottom: 1px solid goldenrod;
    cursor: pointer;
  }
`;

export const NavMobile = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    img {
      width: 7vh;
    }
  }
`;
export const MenuMobile = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    img {
      width: 5vh;
    }
  }
`;

export const FloatMenuMobile = styled.div`
  background-color: var(--float-menu);
  position: absolute;
  border-bottom: 1px solid transparent;
  font-size: 13px;
  top: 7vh;
  right: 0.5vw;
  width: 40vw;
  z-index: 1000 !important;

  ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #ccc;
    width: 100%;
    height: 100%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    color: #fff;
    text-decoration: none;
  }

  li:hover {
    background-color: var(--float-menu-hover);
    border-bottom: 1px solid goldenrod;
    cursor: pointer;
  }
`;