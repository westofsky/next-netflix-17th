import React from 'react';
import styled from 'styled-components';

export const Button = () => {
  return (
    <Container>
      <MyListButton>
        <div className="text">{'My List'}</div>
      </MyListButton>
      <PlayButton>
        <div className="text">{'Play'}</div>
      </PlayButton>
      <InfoButton>
        <div className="text">{'Info'}</div>
      </InfoButton>
    </Container>
  );
};

const Container = styled.div`
  width: 259px;
  height: 45px;
`;
const MyListButton = styled.div`
  .text {
    width: 41px;
    height: 20px;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 13.6416px;
    line-height: 20px;
    /* identical to box height, or 147% */

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

  .text {
    width: 39px;
    height: 30px;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 20.4624px;
    line-height: 30px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.0612px;

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
