'use client';
import styled from 'styled-components';
import NetflixComponent from '@/assets/components/Landing/NetflixComponent';

export default function app() {
  return (
    <Wrapper>
      <WrapLanding>
        <NetflixComponent/>
      </WrapLanding>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
`;

const WrapLanding = styled.div`
  width : 375px;
  height : 736px;

`
