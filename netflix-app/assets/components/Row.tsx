'use client';
import React, { useEffect, useState } from 'react';
import instance from './../api/axios';
import styled from 'styled-components';

export const Row = ({ title, id, fetchUrl }: any) => {
  const [movies, setMovie] = useState([] as any);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 해당 url의 영화들 가져오기
    const { results } = await (await fetch(fetchUrl)).json();
    setMovie(results);
  };
  console.log('results', movies);

  return (
    <Container>
      <Movies id={id}>
        <Title>{title}</Title>
        {movies.map((movie: any) => {
          <Movie
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.name}
          ></Movie>;
        })}
      </Movies>
    </Container>
  );
};

const Container = styled.div``;
const Title = styled.div`
  position: absolute;
  width: 168px;
  height: 16px;
  left: 16px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 20.9212px;
  line-height: 16px;

  letter-spacing: -0.0574057px;

  color: #ffffff;
`;
const Movies = styled.div`
  position: absolute;
  width: 543px;
  height: 161px;
  left: 0px;
  top: 1139px;
`;
const Movie = styled.img`
  position: absolute;
  width: 103px;
  height: 161px;
  left: 0px;
  top: 0px;
`;
