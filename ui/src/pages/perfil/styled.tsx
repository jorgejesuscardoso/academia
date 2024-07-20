import styled from 'styled-components';

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 20px;

  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: dodgerblue;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const PerfilContent = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  height: 92vh;
  margin-top: 7.5vh;
  border-radius: 5px;
  gap: 20px;

  h1 {
    margin-top: 20px;
    font-size: 2rem;
    color: var(--text-h1-color);
  }

  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input {
    display: none;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;    
    height: 100vh;
  }
`;

export const CardPerfil = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 60%;

    p {
      width: 100%;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
    }

    &.photo {
      width: 40%;
      border-left: 1px solid #aaa;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column-reverse;

    div {
      width: 100%;

      &.photo {
        width: 100%;
        border-left: none;
        border-bottom: 1px solid #aaa;
      }
    }
  }
`;

export const CodeBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);

  h2 {
    color: var(--text-h1-color);
  }

  img {
    width: 100%;
    max-width: 150px;
  }

  @media (max-width: 768px) {
    width: 500px;

    img {
      width: 100%;
      max-width: 100px;
    }
  }

  @media (max-width: 540px) {
    width: 90%;

    img {
      width: 100%;
      max-width: 100px;
    }
  }
`;
