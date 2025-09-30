// import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/animation.json';
import styled from 'styled-components';

const LottieContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const LottieVideo = () => {
  return (
    <LottieContainer>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </LottieContainer>
  );
};

export default LottieVideo;