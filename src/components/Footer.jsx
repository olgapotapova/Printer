import React from 'react';
import styled from 'styled-components';
import ticTokImage from '../assets/Tic-toc-icon.svg';
import instagramImage from '../assets/Instagram-logo.svg';
import metaImage from '../assets/Meta-logo.svg';
import telegrammImage from '../assets/Telegramm.svg';
import { device } from './Device';

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
  color: white;
  margin: 0;
`;

const FooterText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  /* line-height: 1.82; */
  display: inline-flex;
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

const FooterLink = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #99C7FE;
  text-decoration: none;
  &:hover{
    color: #6305C1;
  }
`;

const DataLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #99C7FE;
  text-decoration: none;
  
  &:hover {
    color: #EEFFC4;
    color: #6305C1;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  /* gap: 10px; */
  margin-bottom: 30px;
`;

const SocialIcon = styled.img`
  width: 100%;
  border-radius: 50%;
  display: flex;
  /* filter: invert(94%) sepia(7%) saturate(1135%) hue-rotate(31deg) brightness(104%) contrast(103%);
  cursor: pointer; */
  transition: background-color 0.3s ease;
  
  &:hover {
    /* background: #2a8a92; */
    filter: invert(19%) sepia(100%) saturate(6430%) hue-rotate(271deg) brightness(73%) contrast(114%);
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
            <FooterLinks>
            <FooterLink>
              <FooterText>
                Регистрационный номер:
              </FooterText>
                &emsp;12610850
            </FooterLink>

            <FooterLink>
              <FooterText>
                Телефон:
              </FooterText>
              <DataLink href="tel:+37255509777" target="_blank" rel="noopener noreferrer">
                &emsp;+37255509777
              </DataLink>
            </FooterLink>

            <FooterLink>
              <FooterText>
                Эл. почта:
              </FooterText>
              <DataLink href="mailto:3ddesigninvest@gmail.com" target="_blank" rel="noopener noreferrer">
                &emsp;3ddesigninvest@gmail.com 
              </DataLink>
            </FooterLink>

            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterText>Мы в соц. сетях:</FooterText>
            <SocialIcons>
              <a href="https://www.facebook.com/share/1JMboyMb3B" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={metaImage} alt="Meta icon." />
              </a> 
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={instagramImage} alt="Instagram icon." />
              </a> 
              <a href="https://t.me/@DDesignInvest" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={telegrammImage} alt="Instagram icon." />
              </a> 
              <a style={{ display: 'none' }} href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={ticTokImage} alt="Tic-tok icon." />
              </a>  
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn>
            <FooterLinks>
              <FooterLink href="#privacy">Политика безопасности</FooterLink>
              <FooterLink href="#cookies">Куки-файлы</FooterLink>
              <FooterLink href="#about">О компании</FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterLinks>
            <Copyright>
              © 2025, 3D-Design.
            </Copyright>
            <Copyright>
              All Rights Reserved   
            </Copyright>
            </FooterLinks>
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
