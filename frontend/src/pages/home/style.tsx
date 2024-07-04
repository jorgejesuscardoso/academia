// style.js
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e6e6e6;
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
  justify-content: center;
  border: none;
  margin-bottom: 20px;
  border: 1px solid #a1a1a1;
  border-radius: 8px;
  width: 82%;
  height: 40vh;

  textarea {
    width: 99%;
    height: 70%;
    font-size: 14px;
    color: #333;
    padding: 10px;
    margin-bottom: 2px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    resize: none;

    &::placeholder {
      font-size: 14px;
      color: #aaa;
    }
    
    
  }

  input {
    background-color: #f9f9f9;
    padding: 3px 5px;
    width: 95%;
    color: #555;
    text-align: start;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    outline: none;
    border: none;
    border-radius: 5px;

    &:disabled {
      display: none;
    }

    &::placeholder {
      color: #a7a7a7;
    }
  }

  input#img {
    display: none;
  }

  label {
    margin-left: 10px;
    font-size: 14px;
    border-radius: 5px;
    color: #47565f;
  }

  label#imge {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 5px;
    height: 70%;
    border: 1px solid #99b2c0;
    color: #1c252b;
    cursor: pointer;

    &:hover {
      color: #08618a !important;
      border: 1px solid #869aa3;
    }
  }

  div {
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 17%;
  }

  div.title-descript {
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cecece;
    width: 100%;
    height: 10%;
  }

  button {
    background-color: #ffffff;
    color: dodgerblue;
    font-weight: bold;
    border: 1px solid dodgerblue;
    border-radius: 5px;
    margin: 0 5px;
    padding: 8px 15px;
    height: 80%;
    cursor: pointer;

    &:hover {
      border: 1px solid #0060c0;
      color: #0060c0;
      font-weight: bold;
    }
  }

  button.clear {
    background-color: #ffffff;
    color: #a34646;
    font-weight: bold;
    border: 1px solid #a34646;
    border-radius: 5px;
    margin: 0 5px;
    padding: 8px 15px;
    height: 80%;
    cursor: pointer;

    &:hover {
      border: 1px solid #ff0000;
      color: #ff0000;
      font-weight: bold;
    }
  }

  select {
    background-color: #ffffff;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #99b2c0;
    color: #70828d;
    outline: none;
    height: 80%;
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      color: #47565f;
      border: 1px solid #99b2c0;
    }
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
  width: 65vw;
  margin-top: 12vh;
`;

export const SearchCardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row !important;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 55vw;
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

// Feed

export const NewsCardContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column !important;
  border-radius: 8px;
  margin-bottom: 10px;
  width: 82%;
  padding: 20px;

  span {
    color: #333;
    font-size: 12px;  
  }
`;

export const CardTitle = styled.h2`
  text-align: center;
  color: #333333;
  font-size: 18px;
  max-width: 95%;
  margin: 50px 0 40px 0;
`;

export const CardAuthor = styled.h4`
  color: #666666;
  font-size: 12px;
`;

export const CardContent = styled.p`
  text-align: center;
  color: #555;
  font-size: 14px;
  line-height: 1.6;
  max-width: 100%;
  white-space: pre-wrap;
  padding: 0 3%;
`;

export const CardContentImg = styled.img`
  width: 39%;
  max-height: 45vh;
  min-height: 15vh;
  height: auto;
  border-radius: 8px;
  margin: 20px auto;
  cursor: pointer;

  &.fullscreen {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 17%;
    height: auto;
    transform: translate(-50%, -50%) scale(2.2);
    z-index: 1000;
    border-radius: 0;
    transition: transform 0.3s ease-in-out, z-index 0s ease-in-out 0s;
  }
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
  text-align: center;
  color: #5f5f5f;
  font-size: 12px;
  margin-top: 35px;
`;

export const CardSpanContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
`;

export const CardContentAligned = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    overflow-wrap: break-word;
  }
`;


