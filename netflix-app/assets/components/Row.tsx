'use client';
import React from 'react';
import styled from 'styled-components';

export const Row = ({ title, id, isRoundRow, fetchUrl, movies }: any) => {
  return (
    <Movies>
      <Title>{title}</Title>
      <Movie id={id}>
        {movies.map((movie: any) =>
          !isRoundRow ? (
            <RectangularMovie
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.name}
            />
          ) : (
            <WrapRoundMovie key={movie.id}>
              <RoundMovie
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.name}
              />
            </WrapRoundMovie>
          )
        )}
      </Movie>
    </Movies>
  );
};
const Movie = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 5px 0 25px 0;
`;
const Title = styled.div`
  width: 150px;
  height: 45px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 20px;
  letter-spacing: -0.0733945px;

  color: #ffffff;
`;
const Movies = styled.div`
  padding-left: 18px;
`;
const RectangularMovie = styled.img`
  margin-right: 7px;
  width: 103px;
  height: 161px;
  border-radius: 4px;
`;
const RoundMovie = styled.img`
  margin-right: 7px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
const WrapRoundMovie = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 4px;
`;
