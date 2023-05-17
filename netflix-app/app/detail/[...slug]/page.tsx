'use client';
import React from 'react';
import styled from 'styled-components';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const DetailPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const pathName = usePathname();

  const search_params = useSearchParams();

  console.log('router', router);
  console.log('pathName', pathName);
  console.log('search_params', search_params);

  console.log('params', params);

  console.log('[0]', params.slug[0]);
  console.log('[1]', params.slug[1]);
  console.log('[2]', params.slug[2]);

  console.log('searchParams', searchParams);

  return (
    <>
      <Header>
        <BackImg
          src={`https://image.tmdb.org/t/p/original/${params.slug[1]}`}
        />
        <Title>Previews</Title>
        <Preview>{params.slug[2]}</Preview>
      </Header>
    </>
  );
};
const Title = styled.div`
  width: 111px;
  height: 20px;
  left: 32px;
  top: 505px;

  font-weight: 700;
  font-size: 26.7482px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.0733945px;

  color: #ffffff;
  margin: 32px 0 0 32px;
`;
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

const BackImg = styled.img`
  width: 375px;
  height: 415px;
`;

const Preview = styled.div`
  width: 311px;
  height: 43px;

  font-size: 13px;
  line-height: 14px;
  font-weight: 400;

  letter-spacing: -0.0305636px;

  color: rgba(255, 255, 255, 0.83);
  margin: 24px 32px 0 32px;
`;

export default DetailPage;
