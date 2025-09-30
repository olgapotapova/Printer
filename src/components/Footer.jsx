import React from 'react';
import styled from 'styled-components';
import ticTokImage from '../assets/Tic-toc-icon.svg';
import instagramImage from '../assets/Instagram-logo.svg';
import metaImage from '../assets/Meta-logo.svg';
import { device } from './device';

const FooterSection = styled.footer`
  background: #228091;
  padding: 60px 0;
  color: #FFFFFF;
  margin: 0 auto;
`;

const FooterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 9%;
  @media ${device.tablet} {
    margin: 0 10%;
    padding: 0;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #EEFFC4;
  margin: 0;
`;

const FooterText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  /* line-height: 1.82; */
   display: flex;
  flex-direction: column;
  color: #FFFFFF;
  margin: 0;
  gap: 10px;
`;

const FooterDescription = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.33;
  color: #FFFFFF;
  margin: 0;
  text-align: center;
  grid-column: 1 / -1;
  @media ${device.tablet} {
    max-width: 80%;
    padding-bottom: 30%;
    margin: auto;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #99C7FE;
  text-decoration: none;
  
  &:hover {
    color: #EEFFC4;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: left;
  /* gap: 10px; */
  margin-bottom: 30px;
`;

const SocialIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  /* align-items: left; */
  /* justify-content: center; */
  /* color: #FFFFFF; */
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: #2a8a92;
  }
`;

const Copyright = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #EEFFC4;
  text-align: left;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Контактная информация</FooterTitle>
            <FooterText>
              Регистрационный номер: 12610850<br/>
            </FooterText>
            <FooterText>
              Телефон: +37255509777<br/>
            </FooterText>
            <FooterText>
              Электронная почта: 3ddesigninvest@gmail.com 
            </FooterText>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Мы в соц. сетях:</FooterTitle>
            <SocialIcons>
              <SocialIcon src={metaImage} alt="Meta icon." />
              <SocialIcon src={instagramImage} alt="Instagram icon." />
              <SocialIcon src={ticTokImage} alt="Tic-tok icon." />
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Полезные ссылки</FooterTitle>
            <FooterLinks>
              <FooterLink href="#privacy">Политика безопасности</FooterLink>
              <FooterLink href="#cookies">Куки-файлы</FooterLink>
              <FooterLink href="#about">О компании</FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <Copyright>
              © 2025, 3D-Design.
            </Copyright>
            <Copyright>
              All Rights Reserved   
            </Copyright>
        </FooterColumn>
        </FooterContent>
        

        
        <FooterDescription>
          Мы - команда дизайнеров и печатников, работающая в Эстонии и Финляндии. 
          Наша миссия - превращать обычные стены в источник вдохновения, обучения и радости.
        </FooterDescription>
        

      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
