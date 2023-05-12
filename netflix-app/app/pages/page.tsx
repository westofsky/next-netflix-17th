'use client';
import Reac, { use } from 'react';
import styled from 'styled-components';
import { Banner } from '../../assets/components/Banner';
import { Button } from '../../assets/components/Button';
import { Row } from '../../assets/components/Row';
import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpComing,fetchBanner } from './../../assets/api/requests';
import { useQuery } from '@tanstack/react-query';
import Header from '@/assets/components/Common/Header';
import { GetServerSideProps } from 'next';
const API_KEY = '4a87076c7a6bfe146f57401604176096';
import { InferGetServerSidePropsType } from 'next';

export async function getMovieData() {
	
	const getBannerData = await fetchBanner();
  const upComingData = await fetchUpComing();

	const nowPlayingData = await fetchNowPlaying();
	
	const topRatedData = await fetchTopRated();
	
	const popularData = await fetchPopular();
	
	return {
		getBannerData,
		upComingData,
		nowPlayingData,
		topRatedData,
		popularData
	}
}
//   // return { props: { data } };
//   // 아래 코드 주석 처리하고 이걸 살려서 props에 data 내려줘도 똑같음..!
//   //아래 방법을 쓰는게 아무래도 우리 axios랑 requests 쓸 수 있어서 좋은 것 같아

//   const upComingRes = await fetchUpComing();
//   const upComingData = upComingRes.data.results;
//   return {
//     props: {
//       upComingData,
//     },
//   };
// }

export default async function main() {
	const movies = await getMovieData();

  return (
    <Container>
      <Header />
      <Banner
        fetchUrl={movies.getBannerData}
      />
      <Button />
      <Rows>
        <Row title="Previews" id="Ps" movies={movies.upComingData} isRoundRow />
        <Row
          title="NowPlaying"
          id="NP"
					movies={movies.nowPlayingData}
        />
        <Row
          title="Top Rated"
          id="TR"
          movies={movies.topRatedData}
        />
        <Row
          title="Popular"
          id="Pr"
          movies={movies.popularData}
        />
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
