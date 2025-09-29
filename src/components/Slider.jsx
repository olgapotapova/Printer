import React, { useState } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(${(props) => `-${props.index * 100}%`});
`;

const Slide = styled.div`
  flex: 0 0 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  font-size: 18px;

  ${(props) => props.left && 'left: 10px;'}
  ${(props) => props.right && 'right: 10px;'}

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const Slider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const next = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prev = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return (
    <SliderWrapper {...swipeHandlers}>
      <Arrow left onClick={prev}>←</Arrow>
      <Arrow right onClick={next}>→</Arrow>
      <SlideTrack index={index}>
        {React.Children.map(children, (child, i) => (
          <Slide key={i}>{child}</Slide>
        ))}
      </SlideTrack>
    </SliderWrapper>
  );
};

export default Slider;