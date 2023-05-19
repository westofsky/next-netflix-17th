import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Row = ({ title, id, isRoundRow, movies }: any) => {
  return (
    <Movies>
      <Title>{title}</Title>
      <Slider>
        <ArrowWrapper>
          <ArrowLeft
            onClick={() => {
              document.getElementById(id)!.scrollLeft -= 315;
            }}
          >
            {'<'}
          </ArrowLeft>
        </ArrowWrapper>
        <Movie id={id}>
          {movies[0].map((movie: any) =>
            !isRoundRow ? (
              <Link key={movie.id} href={`/detail/${movie.id}`}>
                <RectangularMovie
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.name}
                ></RectangularMovie>
              </Link>
            ) : (
              <Link key={movie.id} href={`/detail/${movie.id}`}>
                <WrapRoundMovie key={movie.id}>
                  <RoundMovie
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.name}
                  />
                </WrapRoundMovie>
              </Link>
            )
          )}
        </Movie>
        <ArrowWrapper>
          <ArrowRight
            onClick={() => {
              document.getElementById(id)!.scrollLeft += 315;
            }}
          >
            {'>'}
          </ArrowRight>
        </ArrowWrapper>
      </Slider>
    </Movies>
  );
};
const Slider = styled.div`
  display: flex;
`;
const ArrowWrapper = styled.div`
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  color: #c4c4c4;
  :hover {
    transform: scale(1.25);
    transition: transform 0.35s;
    color: white;
  }
`;
const Movie = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 5px 0 25px 0;
  scroll-behavior: smooth;
  :hover {
    transform: scale(0.975);
    transition: transform 0.35s;
  }
`;
const Title = styled.div`
  width: 150px;
  height: 45px;
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
  cursor: pointer;
`;
const RoundMovie = styled.img`
  margin-right: 7px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const WrapRoundMovie = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 0 4px 5px;
`;
const ArrowLeft = styled.p``;
const ArrowRight = styled.p``;
