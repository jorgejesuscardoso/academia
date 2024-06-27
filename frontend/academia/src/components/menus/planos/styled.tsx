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