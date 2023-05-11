'use client';
import React from 'react';
import styled from 'styled-components';
import { Banner } from '../../assets/components/Banner';
import { Button } from '../../assets/components/Button';
import { Row } from '../../assets/components/Row';
const API_KEY = '4a87076c7a6bfe146f57401604176096';

export default function main() {
  return (
    <Container>
      <Banner
        fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`}
      />
      <Button />
      <Rows>
        <Row
          title="Previews"
          id="Ps"
          fetchUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}
          isRoundRow
        />
        <Row
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
        />
      </Rows>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000000;
`;

const Rows = styled.div`
  height: 1000px;
  margin-top: 500px;
`;
