'use client';
import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return (
    <MainWrapper>
      <h1>여긴메인</h1>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  background-color : yellow;
  width : 100vw;
  height : 100vh;
`