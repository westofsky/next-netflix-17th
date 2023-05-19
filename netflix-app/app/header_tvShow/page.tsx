'use client';
import React from 'react';
import { fetchTvShows } from '@/assets/api/requests';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

async function getMovieData() {
  const tvShowsData = await fetchTvShows();

  return {
    tvShowsData,
  };
}

export default async function HeaderMoviePage() {
  const tvShowsMovie = await getMovieData();
  return (
    <Container>
      <Title>{'Tv Shows'}</Title>
      <Movies>
        {tvShowsMovie.tvShowsData[0].results.map((movie: any) => (
          <WrapMovie key={movie.key}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              width={146}
              height={76}
              alt={movie.name}
            />
            <WrapTitle href={`/detail/${movie.id}`}>
              <MovieTitle>{movie.name}</MovieTitle>
            </WrapTitle>
          </WrapMovie>
        ))}
      </Movies>
    </Container>
  );
}
const WrapTitle = styled(Link)`
  cursor: pointer;
  text-decoration-line: none;
  margin-left: 10px;
`;
const WrapMovie = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 375px;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #424242;
`;
const MovieTitle = styled.p`
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
`;
const Movies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;
const Container = styled.div``;
const Title = styled.div`
  width: 300px;
  height: 45px;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 20px;
  letter-spacing: -0.0733945px;
  color: #ffffff;
  margin: 60px 0 20px 0;
`;
