'use client';
import React from 'react';
import styled from 'styled-components';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import playButton from './../../../assets/components/images/Button/play.svg';

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
        <PlayButton>
          <ButtonImage src={playButton} />
          <div className="text">{'Play'}</div>
        </PlayButton>
        <Title>Previews</Title>
        <Preview>{params.slug[2]}</Preview>
        <BackButton
          onClick={() => {
            router.push('/home');
          }}
        >
          x
        </BackButton>
      </Header>
    </>
  );
};
const BackButton = styled.button``;
const ButtonImage = styled.img``;
const PlayButton = styled.div`
  height: 45px;
  background: #c4c4c4;
  border-radius: 5.625px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 19px;
  margin: 13px 36px 0 36px;
  cursor: pointer;

  .text {
    width: 39px;
    height: 30px;
    padding-left: 15px;
    user-select: none;
    cursor: pointer;

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 20.4624px;
    line-height: 30px;

    color: #000000;
  }
`;
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
