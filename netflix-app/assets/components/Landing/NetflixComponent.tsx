import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import animationData from './NetflixLogo.json';

export const NetflixComponent = () => {
  const router = useRouter();
  const handleOnComplete = () => {
    router.push('/pages/');
  }
  return (
    <Wrapper>
      <Lottie 
        animationData={animationData}
        loop={false}
        onComplete = {handleOnComplete}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 372px;
`;

export default NetflixComponent;