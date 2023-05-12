import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import animationData from './NetflixLogo.json';

export const NetflixComponent = () => {
  const router = useRouter();
  const goPage = setTimeout(() => {
    router.push('/pages/');
  }, 4000);
  return (
    <Wrapper>
      <Lottie animationData={animationData} loop={false} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 372px;
`;

export default NetflixComponent;
