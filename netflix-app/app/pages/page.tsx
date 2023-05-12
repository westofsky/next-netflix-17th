'use client';
import Reac, { use } from 'react';
import styled from 'styled-components';
import { Banner } from '../../assets/components/Banner';
import { Button } from '../../assets/components/Button';
import { Row } from '../../assets/components/Row';
import { fetchUpComing } from './../../assets/api/requests';
import { useQuery } from '@tanstack/react-query';
import Header from '@/assets/components/Common/Header';
import { GetServerSideProps } from 'next';
const API_KEY = '4a87076c7a6bfe146f57401604176096';
import { InferGetServerSidePropsType } from 'next';

export async function getProps() {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
      { cache: 'no-store' }
    )
  ).json();
  return data.results;

  // return { props: { data } };
  // 아래 코드 주석 처리하고 이걸 살려서 props에 data 내려줘도 똑같음..!
  //아래 방법을 쓰는게 아무래도 우리 axios랑 requests 쓸 수 있어서 좋은 것 같아

  // const upComingRes = await fetchUpComing();
  // const upComingData = upComingRes.data.results;
  // return {
  //   props: {
  //     upComingData,
  //   },
  // };
}

export default function main() {
  const a = use(getProps());

  console.log('a', a);

  return (
    <Container>
      <Header />
      <Banner
        fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`}
      />
      <Button />
      <Rows>
        <Row title="Previews" id="Ps" upComingData={a} isRoundRow />
        {/* <Row
          title="NowPlaying"
          id="NP"
          fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`}
        />
        <Row
          title="Top Rated"
          id="TR"
          fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
        />
        <Row
          title="Popular"
          id="Pr"
          fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
        /> */}
      </Rows>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000000;
`;

const Rows = styled.div`
  height: 945px;
`;
