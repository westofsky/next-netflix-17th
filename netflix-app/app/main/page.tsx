'use client';
import React from 'react';
import styled from 'styled-components';
import { Banner } from './../components/Banner';

export default function Main() {
  return <Banner />;
}

const MainWrapper = styled.div`
  background-color: yellow;
  width: 100vw;
  height: 100vh;
`;
