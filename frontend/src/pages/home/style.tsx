// style.js
import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TextArea = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 100%;
  height: 250px;

  label {
    margin-left: 10px;
    font-size: 14px;
    color: #333;
  }

  textarea {
    width: 99%;
    height: 77%;
    border: none;
    border-radius: 5px 5px 0 0;
    margin-bottom: 2px;
    font-size: 14px;
    color: #555;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    resize: none;

    &::placeholder {
      font-size: 14px;
      color: #7c7b7b;
    }
  }

  input {
    background-color: #ffffff;
    height: 100%;
    color: #555;
    text-align: center;

    &:disabled {
      display: none;
    }
  }

  p {
    color: #333;
    font-size: 12px;
    margin-bottom: 2px;
  }

  div {
    background-color: #dfdfdf;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 15%;
  }

  button {
    background-color: #ffffff;
    color: #677;
    font-weight: bold;
    border: 1px solid #bbb;
    border-radius: 5px;
    margin: 0 5px;
    padding: 8px 15px;
    height: 100%;
    cursor: pointer;

    &:hover {
      border: 1px solid dodgerblue;
      color: dodgerblue;
      font-weight: bold;
    }
  }

  select {
    background-color: #ffffff;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    color: #555;
    outline: none;
    font-size: 14px;
    margin-left: 5px;
  }
`;

export const DivDataNewevent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100% !important;
  width: 20% !important;

  label {
    color: #333;
    font-size: 14px;
    width: 50%;
  }

  input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    font-size: 14px;
    margin-right: 10px;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  margin-top: 12vh;
`;

export const SearchCardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row !important;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 20px;
`;

export const SearchInfoSection = styled.div`
  position: fixed;
  background-color: #eee;
  display: flex;
  width: 100vw;
  top: 7vh;
  padding: 3px;
  gap: 30px;
  z-index: 100;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    strong {
      color: #7c7c7c;
      font-size: 12px;
    }
  }
`;

export const Labels = styled.p`
  margin-left: 10px;
  color: #444;
  font-size: 13px;
`;

export const Value = styled.strong`
  color: #333;

  span {
    display: inline-block;
    text-align: center;
    background-color: green;
    color: white;
    width: 50px;
    border-radius: 5px;
    cursor: pointer;
  }
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


// Feed

export const NewsCardContainer = styled.div`
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

export const CardAuthor = styled.h3`
  color: #666666;
  font-size: 14px;
  margin-bottom: 5px;  
`;

export const FonteNews = styled.h3`
  color: #666666;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  color: #666666;
  font-size: 14px;
  line-height: 1.6;
`;

export const CardContent = styled.p`
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

export const CardPublishedAt = styled.p`
  color: #5f5f5f;
  font-size: 12px;
  margin-top: 5px;
`;


