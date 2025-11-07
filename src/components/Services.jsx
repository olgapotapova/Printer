import React, { useState } from 'react';
import styled from 'styled-components';
import wallImage from '../assets/Wall-image.svg';
import florImage from '../assets/Flor-image.svg';
import adverticingImage from '../assets/Adverticing-image.svg';
import personalImage from '../assets/Personal-image.svg';
import { device } from './Device';
import Modal from './Modal';
import Slider from './Slider';
import imgGallery1 from '../assets/Gallery1.png'
import imgGallery2 from '../assets/Gallery2.png'
import imgGallery3 from '../assets/Gallery3.png'
import imgGallery4 from '../assets/Gallery4.png'
import imgGallery5 from '../assets/Gallery5.png'
import imgGallery6 from '../assets/Gallery6.png'
import imgGallery7 from '../assets/Gallery7.png'
import imgGallery8 from '../assets/Gallery8.png'
import imgGallery9 from '../assets/Gallery9.png'
import { useTranslation } from 'react-i18next'

const GallaryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Gallery = styled.img`
  width: 85%;
  height: auto;
  display: block;
  margin: auto;
  @media ${device.tablet} {

  }
`;

const Text = styled.h1`
  position: absolute;
  bottom: 20px;
  left: -20px;
  font-size: 48px;
  font-weight: bold;
  color: black;
   max-width: 12%;
  overflow-x: hidden;
  white-space: nowrap;
  @media (max-width: 480px) {
    font-size: 24px;
    bottom: 10px;
    left: -10px;
  }
`;

const TextTop = styled.h1`
  position: absolute;
  bottom: 20px;
  left: -20px;
  font-size: 48px;
  font-weight: bold;
  color: white;
  @media (max-width: 480px) {
    font-size: 24px;
    bottom: 10px;
    left: -10px;
  }
`;

const ServicesSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: -146px auto;
  /* padding: 100px 0; */
  padding: 100px 9%;
  background: #FFFFFF;
  max-width: 1440px;
   /* max-width: 1180px; */
  position: relative;
  z-index: 1;
    @media ${device.tablet} {
       margin: -100px auto;
       flex-direction: column-reverse;
    }
`;

const ServicesContainer = styled.div`
  max-width: 50%;
  width: 50%;
  /* padding-right: 9%; */
  /* padding: 0 9%; */
    @media ${device.tablet} {
      padding: 0;
      max-width: 100%;
      width: 100%;
    }
`;

const ServicesTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 43px;
  font-weight: 700;
  line-height: 1.33;
  color: #171715;
  margin: 0 0 40px 0;
  text-align: left;
  @media ${device.tablet} {
    text-align: center;
  }
`;

const ServicesFlex = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {

  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #FFFFFF;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding-bottom: 15px;
  margin-bottom: 13%;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  @media ${device.tablet} {
    border-radius: 10px;
    max-width: 90%;
    text-align: center;
    flex-direction: column;
    padding: 40px 30px 70px;
    margin: 5% auto;
    background-color: rgba(225, 225, 225, 0.5);
  }
`;

const ServiceIcon = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  margin-top: 2%;
  margin-right: 8%;
  @media ${device.tablet} {
    margin: auto;
  }
`;

const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px 10px 0;
  @media ${device.tablet} {
    padding: 10px 10px 10px 0;
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 1.33;
  color: #171715;
  margin: 0 0 10px;
`;

const ServiceDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  color: #616161;
  margin: 0;
`;

const VideoContent = styled.div`
  flex: 1;
  max-width: 500px;
  margin-top: 8%;
  @media ${device.tablet} {
    text-align: center;
    margin-top: 0;
    max-width: 768px;
  }
`;

const VideoTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 43px;
  font-weight: 700;
  line-height: 1.33;
  color: #171715;
  margin: 0 0 30px 0;
  @media ${device.tablet} {
    background: #f2fdff;
  }
`;

const VideoDescription = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.33;
  color: #616161;
  margin: 10% 0 0 0;
  @media ${device.tablet} {
    max-width: 80%;
    margin: auto;
  }
`;

const VideoButton = styled.button`
  background: #0570C1;
  color: #FFFFFF;
  border: none;
  border-radius: 15px;
  font-family: 'Playfair Display', serif;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 300px;
  height: 84px;
  margin-top: 16%;
  
  &:hover {
    background: #045a9e;
  }
`;

//  const Services = () => {
  export default function Services() {
    const { t } = useTranslation();

    const imgGalleryList = [
      imgGallery1, imgGallery2, imgGallery3, imgGallery4, imgGallery5,
      imgGallery6, imgGallery7, imgGallery8, imgGallery9
    ];
    const serviceImages = [wallImage, florImage, adverticingImage, personalImage];

    const services = t('services.list', { returnObjects: true });
    const safeServices = Array.isArray(services) ? services : [];

        if (!Array.isArray(services)) {
      console.warn('services.list is not an array:', services);
    }

    // console.log('services:', services);
    // console.log('isArray:', Array.isArray(services));

    const galleryLabels = t('services.gallery', { returnObjects: true });
    const [modalContent, setModalContent] = useState(null);
    const openModal = (content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

  // const services = [
  //   {
  //     title: '3D-печать на стенах',
  //     description: 'Яркие трёхмерные или двухмерные рисунки, нанесённые непосредственно на стены.',
  //     src: wallImage
  //   },
  //   {
  //     title: '3D-печать на полу',
  //     description: 'Привлекающие внимание арт-объекты на полу как продолжение дизайна стен или отдельно.',
  //     src: florImage
  //   },
  //       {
  //     title: 'Наружная и внутренняя реклама',
  //     description: 'Печать рекламы и логотипов фирм, гостиниц, государственных учреждений.',
  //     src: adverticingImage
  //   },
  //   {
  //     title: 'Индивидуальный дизайн',
  //     description: 'Индивидуальные визуальные решения с учётом особенностей вашего пространства и стиля.',
  //     src: personalImage
  //   }
  // ];

  return (    
    <ServicesSection name="Services">
      <ServicesContainer>
        <ServicesTitle>{t('services.title')}</ServicesTitle>
        <ServicesFlex>
          {/* {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon src={service.src} alt={service.title} />
              <ServiceText>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceText>
            </ServiceCard>
          ))} */}
          {safeServices.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon src={serviceImages[index]} alt={service.title} />
              <ServiceText>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceText>
            </ServiceCard>
          ))}
        </ServicesFlex>
      </ServicesContainer>

        <VideoContent>
          <VideoTitle>{t('services.videoTitle')}</VideoTitle>
          <VideoDescription style={{ whiteSpace: 'pre-line' }}>
            {t('services.videoDescription')}
          </VideoDescription>

          <VideoButton onClick={() => openModal(<p>Контактная форма</p>)}>
            {t('services.button')}
          </VideoButton>

          <Modal isOpen={!!modalContent} onClose={closeModal}>
            <Slider>
            {galleryLabels.map((label, index) => (
              <GallaryContainer key={index}>
                <Gallery loading="lazy" src={imgGalleryList[index]} alt={`Gallery image ${index + 1}`} />
                <TextTop>{label}</TextTop>
                <Text>{label}</Text>
              </GallaryContainer>
            ))}
          </Slider>
            {/* <Slider>
              <GallaryContainer>
                <Gallery loading="lazy" src={imgGallery1} alt="First image of slider."/>
                <TextTop>Для детской</TextTop>
                <Text>Для детской</Text>
              </GallaryContainer>
              <GallaryContainer>
                <Gallery loading="lazy" src={imgGallery2} alt="Second image of slider."/>
                <TextTop>Воздух</TextTop>
                <Text>Воздух</Text>
              </GallaryContainer>
              <GallaryContainer>
                <Gallery loading="lazy" src={imgGallery3} alt="Third image of slider."/>
                <TextTop>Фэн-шуй</TextTop>
                <Text>Фэн-шуй</Text>
              </GallaryContainer>
              <GallaryContainer>
              <Gallery loading="lazy" src={imgGallery4} alt="Fourth image of slider."/>
                <TextTop>Животные</TextTop>
                <Text>Животные</Text>
              </GallaryContainer>
              <GallaryContainer>
                <Gallery loading="lazy" src={imgGallery5} alt="Fifth image of slider."/>
                <TextTop>Экзотика</TextTop>
                <Text>Экзотика</Text>
              </GallaryContainer>
              <GallaryContainer>
                <Gallery loading="lazy" src={imgGallery6} alt="Sixsth image of slider."/>
                <TextTop>Мультики</TextTop>
                <Text>Мультики</Text>
              </GallaryContainer>
              <GallaryContainer>
              <Gallery loading="lazy" src={imgGallery7} alt="Seventh image of slider."/>
                <TextTop>Райские дали</TextTop>
                <Text>Райские дали</Text>
              </GallaryContainer>
              <GallaryContainer>
                <Gallery loading="lazy" src={imgGallery8} alt="Eith image of slider."/>
                <TextTop>Котики</TextTop>
                <Text>Котики</Text>
              </GallaryContainer>
              <GallaryContainer>
                <Gallery loading="lazy" src={imgGallery9} alt="Ninth image of slider."/>
                <TextTop>Цветы</TextTop>
                <Text>Цветы</Text>
              </GallaryContainer>
            </Slider>         */}
          </Modal>

        </VideoContent>
    </ServicesSection>
    
  );
};
