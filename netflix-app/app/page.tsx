'use client';
import styled from 'styled-components';
import NetflixComponent from '@/assets/components/Landing/NetflixComponent';
import { useState } from 'react';

export default function app() {
  const [enter, setEnter] = useState(false);
  const handleEnterNetflix = () => {
    setEnter(true);
  };
  return (
    <Wrapper>
      {enter ? (
        <WrapLanding>
          <NetflixComponent />
        </WrapLanding>
      ) : (
        <WrapEntire onClick = {handleEnterNetflix}>
          <IntroText>
            화면을 클릭해주세요
            <p className = "smallText">(소리를 키시는 것을 권장드립니다)</p>
          </IntroText>
        </WrapEntire>
      )}
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  height: 100%;
`;

const WrapLanding = styled.div`
  width: 375px;
  height: 372px;
`;

const WrapEntire = styled.div`
  width : 100%;
  height : 100%;
  background : black;
  display : flex;
  align-items: center;
  justify-content : center;
  cursor : pointer;
  
`

const IntroText = styled.p`
  color : white;
  font-size : 30px;
  .smallText{
    text-align : center;
    font-size : 15px;
  }
  `