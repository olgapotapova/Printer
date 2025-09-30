import React, { useState } from 'react';
import styled from 'styled-components';
import RobotImage from '../assets/Machine-image.svg';
import { device } from './device';
import Modal from "./Modal";

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

const Question = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
`;

const Answer = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 14px;
`;

const FAQButton = styled.button`
  background: #0570c1;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  font-family: "Playfair Display", serif;
  font-size: 17px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 300px;
  height: 84px;
  margin-top: 14%;
  &:hover {
    background: #045a9e;
  }
  @media ${device.tablet} {
    margin-right: auto;
    margin-left: auto;
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
  const [modalContent, setModalContent] = useState(null);
  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const faqItems = [
        {
          question: 'Можно ли печатать на фактурной стене?',
          answer: 'Да, на фактурной стене печатать можно, но нужно понимать, что многое будет зависеть от фактуры, в некоторых случаях, краска не будет попадать в углубления, а будет расположена лишь на выступах. Если такой вариант вас устраивает, тогда печатать можно.'
        },
                {
          question: 'Работаетем ли мы с дизайном клиента?',
          answer: 'Да, мы работаем с дизайном клиента: вы можете найти в интернете изображение, создать его с помощью ИИ или прислать нам фотографию, с которой мы сами удалим фон. Вы можете также заказать стилизацию у любого постороннего дизайнера и предоставить макет нам.'
        },
                {
          question: 'Как заказать услугу в Финляндии?',
          answer: 'Заказать услугу в Финляндии можно точно так же, как и в Эстонии. Для этого необходимо заполнить форму и сообщение будет отправлено в Телеграмм, позже мы свяжемся с вами и обговорим подробности. '
        },
                {
          question: 'Сколько держится изображение?',
          answer: ' Изображение в помещении держится  10-15 лет и более, а на улице - от 3 лет и более  благодаря использованию UV-чернил, которые устойчивы к выцветанию и влаге. '
        }
    // 'Можно ли печатать на фактурной стене?',
    // 'Работаетем ли мы с дизайном клиента?',
    // 'Как заказать услугу в Финляндии?',
    // 'Сколько держится изображение?'
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
                -- {item.question}
              </FAQItem>
            ))}
          </FAQList>

          <FAQButton onClick={() => openModal(<p>Контактная форма</p>)}>
              Читать ответы
          </FAQButton>

          <Modal isOpen={!!modalContent} onClose={closeModal}>
            <FAQList>
              {faqItems.map((item, index) => (
              <FAQItem key={index}>
                <Question>{item.question}</Question>
                <Answer>{item.answer}</Answer>
              </FAQItem>
               ))}
            </FAQList>
          </Modal>
        </FAQContent>
        
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
