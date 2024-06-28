// style.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  margin-top: 12vh;
`;

export const SearchInfoSection = styled.div`
  position: fixed;
  background-color: #9c9c9c;
  display: flex;
  width: 100vw;
  margin-bottom: 10px;
  top: 7vh;
  padding: 3px;
  gap: 30px;
  z-index: 100;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    strong {
      color: #424242;
      font-size: 12px;
    }
  }
`;

export const Labels = styled.p`
  margin-left: 10px;
  color: #222;
  font-size: 13px;
`;

export const Value = styled.strong`
  color: #333;
`;


// AsideLeft 

export const AsideLeftContainersL = styled.div`
  background-color: #f5f5f5;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  width: 17vw;
  height: 90vh;
  top: 10vh;
  left: 0;
  gap: 20px;
  z-index: 100;

    img {
      width: 100px;

    }
  
`;

// AsideRight

export const AsideRightContainers = styled.div`
  background-color: #f5f5f5;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  width: 17vw;
  height: 90vh;
  top: 10vh;
  right: 0;
  gap: 20px;
  z-index: 100;

    img {
      width: 100px;

    }  
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column !important;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 100%;
  padding: 20px;

  &:first-child {
    margin-top: 10px;
  }
`;

export const CardTitle = styled.h2`
  color: #333333;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  color: #666666;
  font-size: 14px;
  line-height: 1.6;
`;

export const CardLink = styled.a`
  color: dodgerblue;
  display: block;
  margin-top: 10px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;


