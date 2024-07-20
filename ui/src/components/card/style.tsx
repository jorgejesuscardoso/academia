import { styled } from 'styled-components';

export const Card = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(10, 10, 10, 0.7);
  padding: 16px;
  width: 100%;
  max-width: 270px;
  margin: 0 auto;

    span {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;

      img {
        width: 25px;
        height: 25px;
        transition: transform 0.4s ease;
        
        &:hover {
          transform: rotate(90deg);
        }
      }
    }

  @media (max-width: 520px) {
    max-width: 100%;
    width: 100% !important;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    width: 48%;
    img {
      width: 15px !important;
      height: 15px !important;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;

  @media (max-width: 510px) {
    flex-direction: column !important;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 511px) and (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const CardTitle = styled.h1`
  font-size: 1.5em;
  margin: 0 0 16px 0;

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export const CarParagraph = styled.p`
  margin: 8px 0;
  
  @media (max-width: 320px) {
    font-size: 0.7em;

    &.mail {
      font-size: 0.6em;
      strong {
        font-size: 0.8em !important;
      }
    }
  }
`;

export const Strong = styled.strong`
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;
