import React from 'react';
import styled from 'styled-components';
import timeImage from '../assets/Time-image.svg';
import surfaceImage from '../assets/Surface-image.svg';
import weekendImage from '../assets/Weekend-image.svg';
import visualizationImage from '../assets/Visualization-image.svg';
import { device } from './Device';
import Slider from './Slider';
import { useTranslation } from 'react-i18next';

const AdvantagesSection = styled.section`
  position: relative;
  z-index: 3;
  padding: 48px 0;
`;

const AdvantagesContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 110px;
    @media ${device.tablet} {
      padding: 0;
      }
`;

const AdvantagesTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 39px;
  font-weight: 700;
  line-height: 1.33;
  color: #171715;
  text-align: left;
    @media ${device.tablet} {  
      text-align: center;
    }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2%;
  margin-top: 50px;
  @media ${device.laptop} {  
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.tablet} {  
    display: none;
  }
`;

const AdvantagesGridMobile = styled.div`
  display: none;
  margin-top: 50px;
  @media ${device.tablet} {  
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
  }
`;

const AdvantageCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 64px 60px 85px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  @media ${device.tablet} {  
    width: 60vw;
    margin: auto;
  }
`;

const AdvantageIcon = styled.img`
  width: 60px;
  height: 60px;
  margin: auto auto 35px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdvantageText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.43;
  color: #616161;
  margin: 0;
  text-align: center;
    @media ${device.tablet} {  
      font-size: 14px; 
    }
`;

export default function Advantages() {

  const { t } = useTranslation();

  const advantages = t('advantages', { returnObjects: true });

  // const advantages = [
  //   {
  //     text: 'Печать за 1 день без демонтажа и ремонта.',
  //     icon: timeImage,
  //     title: 'Скорость'
  //   },
  //   {
  //     text: '20+ поверхностей: бетон, плитка, стекло...',
  //     icon: surfaceImage,
  //     title: 'Поверхности'
  //   },
  //   {
  //     text: 'Работа в выходные и праздники.',
  //     icon: weekendImage,
  //     title: 'Поверхности'
  //   },
  //   {
  //     text: 'Бесплатная визуализация перед началом работ.',
  //     icon: visualizationImage,
  //     title: 'Визуализация'
  //   }
  // ];

  return (
    <AdvantagesSection name="Advantages">
      <AdvantagesContainer>
        <AdvantagesTitle>{t('advantagesTitle')}</AdvantagesTitle>
        <AdvantagesGrid>
          {advantages.map((advantage, index) => (
            // <AdvantageCard key={index}>
            //   <AdvantageIcon src={advantage.icon} alt={advantage.title}/>
            //   <AdvantageText>{advantage.text}</AdvantageText>
            // </AdvantageCard>
            <AdvantageCard key={index}>
              <AdvantageIcon
                src={
                  index === 0 ? timeImage :
                  index === 1 ? surfaceImage :
                  index === 2 ? weekendImage :
                  visualizationImage
                }
                alt={advantage.title}
              />
              <AdvantageText>{advantage.text}</AdvantageText>
            </AdvantageCard>

          ))}
        </AdvantagesGrid>

        <AdvantagesGridMobile>
            <Slider>
              {advantages.map((advantage, index) => (
              // <AdvantageCard key={index}>
              //   <AdvantageIcon src={advantage.icon} alt={advantage.title}/>
              //   <AdvantageText>{advantage.text}</AdvantageText>
              // </AdvantageCard>
              <AdvantageCard key={index}>
                <AdvantageIcon
                  src={
                    index === 0 ? timeImage :
                    index === 1 ? surfaceImage :
                    index === 2 ? weekendImage :
                    visualizationImage
                  }
                  alt={advantage.title}
                />
                <AdvantageText>{advantage.text}</AdvantageText>
              </AdvantageCard>
              ))}
            </Slider>  
          </AdvantagesGridMobile>
                  {/* <AdvantagesGrid>
          {advantages.map((advantage, i) => (
            <AdvantageCard key={`desktop-${i}`}>
              <AdvantageIcon src={advantage.icon} alt={advantage.title} />
              <AdvantageText>{advantage.text}</AdvantageText>
            </AdvantageCard>
          ))}
        </AdvantagesGrid>

        <AdvantagesGridMobile>
          <Slider>
            {advantages.map((advantage, i) => (
              <AdvantageCard key={`mobile-${i}`}>
                <AdvantageIcon src={advantage.icon} alt={advantage.title} />
                <AdvantageText>{advantage.text}</AdvantageText>
              </AdvantageCard>
            ))}
          </Slider>
        </AdvantagesGridMobile> */}

      </AdvantagesContainer>
    </AdvantagesSection>
  );
};
