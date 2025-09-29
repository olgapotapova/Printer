import React from 'react';
import styled from 'styled-components';
import RobotImage from '../assets/Machine-image.svg';
import { device } from './device';

const FAQSection = styled.section`
  padding: 100px 0;
  /* background: #FFFFFF; */
  background: #F2FDFF;
`;

const FAQContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  /* display: gap;
  grid-template-columns: 1fr, 1fr; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* gap: 10px; */
  @media ${device.tablet} {
    padding: 0;
     margin: 0 10%;
  }
`;

const FAQContent = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0;
`;

const FAQTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.33;
  color: #171715;
  margin: 0 0 40px 0;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.61;
  color: #616161;
  padding: 15px 0;
  border-bottom: 1px solid #E0E0E0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FAQImage = styled.div`
  flex: 1;
  max-width: 600px;
  height: 400px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #616161;
  font-size: 18px;
  @media ${device.tablet} {
    display: none;
  }
`;

const FAQIcon = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 30px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
`;

const FAQ = () => {
  const faqItems = [
    'Можно ли печатать на фактурной стене?',
    'Работаетем ли мы с дизайном клиента?',
    'Как заказать услугу в Финляндии?',
    'Сколько держится изображение?'
  ];

  return (
    <FAQSection>
      <FAQContainer>
        <FAQImage>
          <FAQIcon src={RobotImage} alt="Robot icon."/>
        </FAQImage>
        <FAQContent>
          <FAQTitle>Часто спрашивают:</FAQTitle>
          <FAQList>
            {faqItems.map((item, index) => (
              <FAQItem key={index}>
                -- {item}
              </FAQItem>
            ))}
          </FAQList>
        </FAQContent>
        
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
