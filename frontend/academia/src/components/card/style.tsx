import { styled } from 'styled-components';

export const Card = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

    span {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;

      img {
        width: 25px;
        height: 25px;
      }
    }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 11vh;
  width: 60%;
  gap: 8px;
`;

export const CardTitle = styled.h1`
  font-size: 1.5em;
  margin: 0 0 16px 0;
`;

export const CarParagraph = styled.p`
  margin: 8px 0;
`;

export const Strong = styled.strong`
  color: #333;
`;
