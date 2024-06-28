import styled from 'styled-components';

export const ContainerConfig = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;

  h3 {
    margin-bottom: 10px;
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 60%;


    button {
      background-color: dodgerblue;
      color: #fff;
      padding: 5px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0d6efd;
      }
    }

    li {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px;
      font-size: 0.8rem;
      border-radius: 5px;
    }
    
  }
`;

export const ConfigMenu = styled.div`
  position: absolute;
  background-color: #ddd;
  border: 1px solid #bbb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 25%;
  height: 25vh;
  gap: 10px;

  span {
    position: absolute;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    width: 100%;
    gap: 10px;

    button {
      width: 30%;
      padding: 10px;
      margin-top: 10px;
      border-radius: 5px;
      border: none;
      background-color: dodgerblue;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      outline: none;
    }
  }
  
`;