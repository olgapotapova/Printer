import React, { useState } from 'react';
import styled from 'styled-components';
import formImage from '../assets/form-image.png';
// import girlWithTree from '../assets/girl-with-tree.png';
import { device } from './Device';
import { useTranslation } from 'react-i18next';

const ContactSection = styled.section`
  padding: 100px 0;
`;

const ContactContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 9%;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media ${device.tablet} {
    margin: 0;
    padding: 0;
    background-image: url(${formImage});
    width: 100%;
    min-width: 100%;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ContactContent = styled.div`
  flex: 1;
  @media ${device.tablet} {
    margin: 10%;
  }
`;

const ContactTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.33;
  color: #171715;
  margin: 0 0 40px 0;
  padding: 0 30px;
  @media ${device.tablet} {
    display: none;
  }
`;

const ContactSubtitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.33;
  color: #171715;
  margin: 0 0 40px 0;
  padding: 0 30px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 10px;
  
  @media ${device.tablet} {
    background-color: rgba(217, 217, 217, 0.9);
    /* max-width: 80%; */
    justify-content: center;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormLabel = styled.label`
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #616161;
`;

const FormInput = styled.input`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  border: 1px solid #C1B7B7;
  border-radius: 15px;
  background: transparent;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #0570C1;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 70px;
  padding: 20px;
  border: 1px solid #C1B7B7;
  border-radius: 15px;
  background: transparent;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #0570C1;
  }
`;

const ContactButton = styled.button`
  background: #0570C1;
  color: #FFFFFF;
  border: none;
  border-radius: 15px;
  padding: 20px 40px;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  width: 358px;
  height: 98px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  &:hover {
    background: #045a9e;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
  }
`;

const ContactImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${device.tablet} {
    display: none;
  }
`;

const ContactImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
`;

export default function Contact() {

  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      setIsSubmitted(true);
      // add sending of form
    } else {
      alert('Пожалуйста, подтвердите согласие на обработку данных');
    }
  };
// const Contact = () => {
  return (
    <ContactSection name="Contact">
      <ContactContainer>
        <ContactContent>
          <ContactSubtitle>
            {/* Свяжитесь с нами через телеграмм: */}
            {t('contactSubtitle')}
            </ContactSubtitle>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormField>
              {/* <FormLabel>Ваше имя</FormLabel> */}
               <FormLabel>{t('form.nameLabel')}</FormLabel>
                <FormInput type="text" placeholder={t('form.namePlaceholder')} />
              {/* <FormInput type="text" placeholder="Введите ваше имя" /> */}
            </FormField>
            
            <FormField>
              <FormLabel>{t('form.phoneLabel')}</FormLabel>
              <FormInput type="tel" placeholder={t('form.phonePlaceholder')} />
              {/* <FormLabel>Телефон</FormLabel>
              <FormInput type="tel" placeholder="Введите ваш телефон" /> */}
            </FormField>
            
            <FormField>
              <FormLabel>{t('form.emailLabel')}</FormLabel>
              <FormInput type="email" placeholder={t('form.emailPlaceholder')} />
              {/* <FormLabel>Емейл</FormLabel>
              <FormInput type="email" placeholder="Введите ваш email" /> */}
            </FormField>
            
            <FormField>
              <FormLabel>{t('form.commentLabel')}</FormLabel>
              <FormTextarea placeholder={t('form.commentPlaceholder')} />
              {/* <FormLabel>Комментарий</FormLabel>
              <FormTextarea placeholder="Введите ваш комментарий" /> */}
            </FormField>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />&nbsp;
              {t('form.consent')}
              {/* Даю согласие на обработку данных */}
            </label> 
            
            <ContactButton type="submit">
              {/* Отправить в телеграмм */}
              {t('form.submit')}
            </ContactButton>
             {isSubmitted && <p>{t('form.success')}</p>}
            {/* {isSubmitted && <p>Форма успешно отправлена!</p>} */}
          </ContactForm>
           <ContactTitle>
            {/* Контакт: */}
            {t('contactTitle')}
           </ContactTitle>
        </ContactContent>
        
        <ContactImages>
          <ContactImage src={formImage} alt="Contact Form" />
          {/* <ContactImage src={girlWithTree} alt="Girl with Tree" /> */}
        </ContactImages>
      </ContactContainer>

    </ContactSection>
  );
};

