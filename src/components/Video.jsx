import React from 'react';
import styled from 'styled-components';
import secondaryImage from '../assets/secondary-image.png';
import { device } from './Device';
import LottieVideo from './LottieVideo';

const VideoSection = styled.section`
  padding: 100px 0;
  /* background: #FFFFFF; */
  /* background: #F2FDFF; */
  background: transparent;
`;

const VideoBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 90%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #F2FDFF;
`;

const VideoSectionTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 1.33;
  color: #000000;
  margin: 0px 0 60px 0;
  text-align: left;
  max-width: 1440px;
  margin: 0 auto 60px;
  @media ${device.tablet} {
    text-align: center;
  }
`;

const VideoContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  /* display: flex;
  flex-direction: row;
  justify-content: space-evenly; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
  align-items: top;
  @media ${device.tablet} {
    grid-template-columns: none;
  }
`;

const VideoPlayer = styled.div`
  max-width: 718px;
  height: 969px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: #D9D9D9;
  @media ${device.tablet} {
    width: 100%;
  }
`;

// const VideoImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const SecondaryContainer = styled.div`
  display: block;
  max-width: 718px;
  height: 669px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: #D9D9D9;
  @media ${device.tablet} {
    display: none;
  }
`;

const SecondaryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 15px; */
`;

const Video = () => {
  return (
    <VideoSection>
      
      <VideoSectionTitle>Раскрываем тайны<br/> производства:</VideoSectionTitle>
      <VideoBackground/>

      <VideoContainer> 
        
        <VideoPlayer>
                  
          <LottieVideo></LottieVideo>
          {/* <VideoImage src={videoCapture} alt="3D Design Video" /> */}
        </VideoPlayer>
        <SecondaryContainer>
          <SecondaryImage src={secondaryImage} alt="3D Design Video" />
        </SecondaryContainer>
      </VideoContainer>
    </VideoSection>
  );
};

export default Video;
