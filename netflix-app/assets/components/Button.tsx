import React from 'react';
import styled from 'styled-components';

export const Button = () => {
  return (
    <Container>
      <MyListButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2969 3.5625H12.7031C12.8281 3.5625 12.8906 3.625 12.8906 3.75V20.25C12.8906 20.375 12.8281 20.4375 12.7031 20.4375H11.2969C11.1719 20.4375 11.1094 20.375 11.1094 20.25V3.75C11.1094 3.625 11.1719 3.5625 11.2969 3.5625Z"
            fill="white"
          />
          <path
            d="M4.125 11.1094H19.875C20 11.1094 20.0625 11.1719 20.0625 11.2969V12.7031C20.0625 12.8281 20 12.8906 19.875 12.8906H4.125C4 12.8906 3.9375 12.8281 3.9375 12.7031V11.2969C3.9375 11.1719 4 11.1094 4.125 11.1094Z"
            fill="white"
          />
        </svg>

        <div className="text">{'My List'}</div>
      </MyListButton>
      <PlayButton>
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0V21.6L18 10.8L0 0Z" fill="black" />
        </svg>
        <div className="text">{'Play'}</div>
      </PlayButton>
      <InfoButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16V12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8H12.01"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="text">{'Info'}</div>
      </InfoButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 85px;
  margin-top: 15px;
`;
const MyListButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    width: 60px;
    height: 20px;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 13.6416px;
    line-height: 20px;

    text-align: center;
    letter-spacing: -0.0408px;

    color: #ffffff;
  }
`;
const PlayButton = styled.div`
  width: 110.62px;
  height: 45px;
  background: #c4c4c4;
  border-radius: 5.625px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  margin: 0 45px 0 40px;

  .text {
    width: 39px;
    height: 30px;
    padding-left: 15px;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 20.4624px;
    line-height: 30px;

    color: #000000;
  }
`;
const InfoButton = styled.div`
  .text {
    width: 22px;
    height: 20px;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 13.6416px;
    line-height: 20px;
    /* identical to box height, or 147% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.0408px;

    color: #ffffff;
  }
`;
