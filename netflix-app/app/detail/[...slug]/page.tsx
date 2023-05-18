'use client';
import React, { use } from 'react';
import styled from 'styled-components';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import playButton from '@/assets/components/images/Button/play.svg';
import { fetchDetails } from '@/assets/api/requests';

async function getMovieDetails(movieId: string) {
  const getMovieDetail = await fetchDetails(movieId);

  return { getMovieDetail };
}
const DetailPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();

  const movieDetail = use(getMovieDetails(params.slug[0]));
  return (
    <>
      <Header>
        <I>
          <BackImg
            src={`https://image.tmdb.org/t/p/original${movieDetail.getMovieDetail.poster_path}`}
          />
          <BackButton
            onClick={() => {
              router.push('/home');
            }}
          >
            x
          </BackButton>
        </I>
        <S>
          {/* 컴포넌트 명 다시 바꾸기 */}
          <PlayButton>
            <ButtonImage src={playButton.src} />
            <div className="text">{'Play'}</div>
          </PlayButton>
        </S>
        <Title>{movieDetail.getMovieDetail.title}</Title>
        <Preview>{movieDetail.getMovieDetail.overview}</Preview>
      </Header>
    </>
  );
};

const S = styled.div`
  :hover {
    transform: scale(0.95);
    transition: transform 0.35s;
  }
`;
const I = styled.div`
  position: relative;
  display: flex;
`;
const BackButton = styled.button`
  position: absolute;
  border: none;
  top: 5%;
  left: 90%;
  background: none;
  color: white;
  font-size: 1.3rem;
  cursor : pointer;
`;
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
  left: 32px;
  top: 505px;
  height: 50px;

  font-weight: 700;
  font-size: 26.7482px;
  line-height: 30px;

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
