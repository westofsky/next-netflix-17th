'use client';
import React, { use, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { fetchVideos, fetchDetails } from '@/assets/api/requests';

async function getMovieVideo(movieId: string) {
  const getVideo = await fetchVideos(movieId);

  return { getVideo };
}

async function getMovieDetails(movieId: string) {
  const getMovieDetail = await fetchDetails(movieId);

  return { getMovieDetail };
}

interface VideoResult {
  key: string;
}

interface MovieInfo {
  title: string;
  overview: string;
}

interface MovieVideo {
  getVideo: {
    results: VideoResult[];
  };
}

interface DetailPageProps {
  params: {
    slug: string[];
  };
}

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const router = useRouter();
  const [movieDetail, setMovieDetail] = useState<MovieVideo | null>(null);
  const [movieInfo, setMovieInfo] = useState<MovieInfo | null>(null);
  const [movieKey, setMovieKey] = useState<string>('');

  useEffect(() => {
    async function fetchInfo() {
      const getMovieDetail = await getMovieVideo(params.slug[0]);
      setMovieDetail(getMovieDetail);
      setMovieKey(getMovieDetail.getVideo.results[0].key);
    }
    fetchInfo();
    async function fetchData() {
      const getMovieInfo = await getMovieDetails(params.slug[0]);
      setMovieInfo(getMovieInfo.getMovieDetail);
    }
    fetchData();
  }, []);

  if (!movieInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header>
        <Button>
          <BackButton
            onClick={() => {
              router.push('/home');
            }}
          >
            x
          </BackButton>
        </Button>
        <Iframe
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${movieKey}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movieKey}`}
          title="YouTube video player"
          allow="autoplay; fullscreen"
        ></Iframe>
        <Title>{movieInfo.title}</Title>
        <Preview>{movieInfo.overview}</Preview>
      </Header>
    </Container>
  );
};

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;
const BackButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  float: right;
  margin-bottom: 10px;
`;
const Title = styled.div`
  left: 32px;
  top: 505px;
  height: 50px;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 30px;
  color: #ffffff;
  margin: 32px 0 0 32px;
`;
const Header = styled.div`
  width: 375px;
  height: 415px;
  padding-top: 10px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
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
const Button = styled.div``;
const Container = styled.div``;

export default DetailPage;
