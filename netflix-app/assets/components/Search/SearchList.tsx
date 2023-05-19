import styled from 'styled-components';
import Image from 'next/image';
import { BiPlayCircle } from 'react-icons/bi';
import Link from 'next/link';

export default function SearchList({ movies }: any) {
  console.log(movies);
  return (
    <Container>
      {movies.length === 0 ? (
        <ResultNoneText>There is no results. . .</ResultNoneText>
      ) : (
        <></>
      )}
      {movies.map((movie: any, index: number) => (
        <MovieItem key={index}>
          <WrapImage>
            {movie.backdrop_path === null ? (
              <Image
                src="/netflix-logo.png"
                width={146}
                height={76}
                alt={movie.title}
              />
            ) : (
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                width={146}
                height={76}
                alt={movie.title}
              />
            )}
          </WrapImage>

          <MovieTitle>{movie.title}</MovieTitle>
          <WrapPlayButton key={movie.id} href={`/video/${movie.id}`}>
            <BiPlayCircle size={25} />
          </WrapPlayButton>
        </MovieItem>
      ))}
    </Container>
  );
}

const MovieItem = styled.div`
  margin-bottom: 10px;
  width: 375px;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #424242;
`;
const WrapImage = styled.div`
  margin-right: 10px;
  height: 76px;
`;
const MovieTitle = styled.p`
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
`;
const ResultNoneText = styled.p`
  color: white;
`;
const WrapPlayButton = styled(Link)`
  cursor: pointer;
  color: white;
`;
const Container = styled.div``;
