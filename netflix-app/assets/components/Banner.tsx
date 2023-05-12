'use client';
import React from 'react';
import styled from 'styled-components';

export const Banner = ({ fetchUrl }: any) => {
  return (
    <Header
      style={{
        backgroundImage: `url(${fetchUrl})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    ></Header>
  );
};

const Header = styled.div`
  width: 375px;
  height: 415px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
`;
