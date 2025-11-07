import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import frontImage from "../assets/front-image.png";
import logoImage from "../assets/logo.svg";
import { Link } from "react-scroll";
import { device } from "./Device";
import MenuButton from "../assets/Mobile-menu.svg";
import { useTranslation } from 'react-i18next';


const languages = [
  { code: 'en', label: 'Aнг' },
  { code: 'et', label: 'Эст' },
  { code: 'ru', label: 'Рус' },
  { code: 'fi', label: 'Фин' },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  position: relative;
  z-index: 1000;
  width: 100%;
  overflow: hidden;
  background: transparent;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 71%;
  background: #f2fdff;
`;

const HeroContainer = styled.div`
  max-width: 1440px;
  /* max-width: 1180px; */
  margin: 0 auto;
  padding: 100px 9%;
  /* padding: 0 0 0 9%; */
  position: relative;
  z-index: 2;
  @media ${device.tablet} {
    padding: 0;
  }
`;

const HeroHeader = styled.header`
  display: flex;
  /* justify-content: start; */
  align-items: center;
  /* gap: 2vw; */
  padding-top: 36px;
  @media ${device.laptop} {
    padding-top: 0;
    justify-content: space-around
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    margin-left: 10%;
  }
`;

const LogoText = styled.h1`
  font-family: "Ballet", cursive;
  font-size: 48px;
  font-weight: 400;
  color: #549f90;
  margin: 0;
  white-space: nowrap;
  @media ${device.tablet} {
    font-size: 18px;
    margin-left: -12%;
  }
`;

const LogoIcon = styled.div`
  position: relative;
`;

const LogoIconSvg = styled.img`
  width: 110px;
  height: 110px;
  @media ${device.tablet} {
    width: 40px;
    height: 40px;
    margin: 80% 0 80% 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 3vw;
  @media (max-width: 1070px) {
    gap: 1vw;
  }
  @media ${device.tablet} {
    /* gap: 20px; */
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  /* display: inline-block; */
  display: block;
`;

const MobileMenuButton = styled.button`
  display: none;
  @media ${device.laptop} {
    display: block;
    border: none;
    outline: none;
    background: transparent;
  }
`;

const MenuImage = styled.img`
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 100;
  animation: ${fadeIn} 0.3s ease-out;
  text-align: center;
  list-style-type: none;

  @media ${device.tablet}{
    width: 200px;
    top: 60px;
    padding: 30px 15px 60px;
  }
`;

const DropdownUl = styled.ul`
  list-style-type: none;
`;

const CloseButton = styled.button`
  margin-top: 15px;
  color: green;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
`;

const ScrollButtonMenu = styled.button`
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: 700;
  color: #616161;
  text-decoration: none;
  transition: color 0.3s ease;
  border: none;
  outline: none;
  background: transparent;
  &:hover {
    color: #549f90;
  }
`;

const ScrollButton = styled.button`
  font-family: "Playfair Display", serif;
  font-size: 17px;
  font-weight: 700;
  color: #616161;
  text-decoration: none;
  transition: color 0.3s ease;
  border: none;
  outline: none;
  background: transparent;
  &:hover {
    color: #549f90;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

const LanguageSelector = styled.div`
  position: relative;
  /* display: inline-block; */
  display: flex;
  justify-content: center;
  border: solid black 1px;
  padding: 8px 16px;
  border-radius: 6px;
  color: #000;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: 600;
  max-width: 65px;
  margin-right: 30px;
  cursor: pointer;
    @media ${device.tablet} {
    margin: auto;
    font-size: 16px;
    padding: 3px 16px;
  }
`;

const ArrowButton = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  font: inherit;
  background: transparent;
  @media ${device.tablet} {
    /* display: none; */
  }
`;

const Arrow = styled.span`
  position: absolute;
  top: 30%;
  left: 100%;
  background: transparent;
  border: none;
  outline: none;
  margin-left: 8px;
  transition: transform 0.2s ease;
  transform: ${({ isOpenLang }) => (isOpenLang ? 'rotate(180deg)' : 'rotate(0deg)')};
  @media ${device.tablet} {
    /* display: none; */
  }
`;

const DropdownLang = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: transparents;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  width: 100%;
  z-index: 10;
  transition: transform 0.2s ease;
  @media ${device.tablet} {
    /* display: none; */
  }
`;

const DropdownLangLi = styled.li`
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: 600;
  color: black;
  padding-left: 20%;
  &:hover{
    background-color: #e0e0e0;
  }
`;

const HeroContent = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: top;
  padding-top: 40px;
  /* gap: 30px; */
  @media ${device.tablet} {
    padding-top: 0px;
    justify-content: center;
  }
`;

const HeroText = styled.div`
  max-width: 50%;
  width: 50%;
  /* padding: 0 10%; */
  @media ${device.tablet} {
    max-width: 85%;
    width: 75%;
    position: absolute;
    z-index: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const HeroTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 105px;
  font-weight: 700;
  line-height: 1.05;
  color: #171715;
  margin-top: -4%;
  @media ${device.laptop} {
    font-size: 80px;
  }
  @media ${device.tablet} {
    font-size: 74px;
    color: #06fceb;
    text-align: center;
    margin: 10% auto 10%;
  }
`;

const HeroSubtitle = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 23.5px;
  font-weight: 400;
  line-height: 1.33;
  color: #616161;
  padding: 10% 15% 0 0;
  @media ${device.tablet} {
    font-size: 20px;
    text-align: center;
    background-color: rgba(225, 225, 225, 0.5);
    border-radius: 10px;
    padding: 10% 10%;
    color: black;
  }
`;

const HeroButton = styled.button`
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

const HeroImageContainer = styled.div`
  position: relative;
  width: 50vw;
  max-width: 50vw;
  height: 970px;
  overflow-y: visible;
  @media ${device.tablet} {
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
  }
`;

const FrontImage = styled.img`
  /* position: absolute; */
  position: sticky;
  width: 110%;
  transform: translateX(9%);
  height: 970px;
  object-fit: cover;
  border-radius: 15px;
  z-index: 2;
  @media ${device.tablet} {
    position: absolute;
    transform: translateX(0);
    min-width: 100vw;
    width: 100%;
    background-size: 100%;
    filter: brightness(60%);
  }
`;

const Button = styled.button`
  background: #0570c1;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  padding: 20px 40px;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background: #045a9e;
  }
`;

const Hero = () => {

  const { t, i18n } = useTranslation();
  // const [selectedLang, setSelectedLang] = useState('ru');
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('lang') || 'ru';
  });

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang]);

  const [isOpenLang, setIsOpenLang] = useState(false);

  const toggleDropdown = () => setIsOpenLang(!isOpenLang);

  const selectLanguage = (code) => {
    setSelectedLang(code);         //update local state
    i18n.changeLanguage(code);     //switching the language in i18next
    localStorage.setItem('lang', code); //saving to localStorage
    setIsOpenLang(false);          //closing dropdown
  };

  const currentLabel = languages.find(lang => lang.code === selectedLang)?.label;

  const [modalContent, setModalContent] = useState(null);
  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <HeroSection>
      <HeroBackground />
      <HeroContainer>
        <HeroHeader>
          <Logo>
            <LogoIcon>
              <LogoIconSvg src={logoImage} alt="Logo" />
            </LogoIcon>
            <LogoText>3D-Design invest</LogoText>
          </Logo>
          <Navigation>

            <LanguageSelector>
              {isOpenLang && (
                <DropdownLang className="dropdown">
                  {languages.map(lang => (
                    <DropdownLangLi
                      key={lang.code}
                      className={lang.code === selectedLang ? 'active' : ''}
                      onClick={() => selectLanguage(lang.code)}
                    >
                      {lang.label}
                    </DropdownLangLi>
                  ))}
                </DropdownLang>
              )}
              <ArrowButton onClick={toggleDropdown}>
                {currentLabel} <Arrow>▼</Arrow>
              </ArrowButton>
            </LanguageSelector>

            {/* <LanguageSelector>
              Рус
              <Arrow>▼</Arrow>
            </LanguageSelector> */}
            {/* <MenuImage src={MenuButton} alt=""></MenuImage> */}

            <MenuWrapper ref={menuRef}>
            <MobileMenuButton onClick={toggleMenu}><MenuImage src={MenuButton} alt="Menu icon."></MenuImage></MobileMenuButton>
            {isOpen && (
              <Dropdown>
                {/* <p>Навигация по сайту</p> */}
                <DropdownUl>
                  <li>
                    <Link to="Services" smooth={true} duration={500}>
                      <ScrollButtonMenu onClick={toggleMenu}>{t('menu.portfolio')}</ScrollButtonMenu>
                    </Link>
                  </li>
                  <li>
                    <Link to="Advantages" smooth={true} duration={500}>
                    <ScrollButtonMenu onClick={toggleMenu}>{t('menu.benefits')}</ScrollButtonMenu>
                    </Link>
                  </li>
                  <li>
                    <Link to="Contact" smooth={true} duration={500}>
                    <ScrollButtonMenu onClick={toggleMenu}>{t('menu.contact')}</ScrollButtonMenu>
                    </Link>
                  </li>
                </DropdownUl>
                <CloseButton onClick={closeMenu}>Закрыть</CloseButton>
              </Dropdown>
            )}
          </MenuWrapper>

            <Link to="Services" smooth={true} duration={500}>
              <ScrollButton>Портфолио</ScrollButton>
            </Link>
            <Link to="Advantages" smooth={true} duration={500}>
              <ScrollButton>Преимущества</ScrollButton>
            </Link>
            <Link to="Contact" smooth={true} duration={500}>
              <ScrollButton>Контакт</ScrollButton>
            </Link>
          </Navigation>
        </HeroHeader>

        <HeroContent>
          <HeroText>
            <HeroTitle style={{ whiteSpace: 'pre-line' }}>{t('heroTitle')}</HeroTitle>
            <HeroSubtitle style={{ whiteSpace: 'pre-line' }}>
              {/* 3D-печать на любых поверхностях без ремонта и пыли. В Таллинне,
              Тарту, Нарве, Пярну, <br />
              Хельсинки... */}
              {t('heroSubtitle')}
            </HeroSubtitle>

            {/* <HeroButton onClick={() => openModal(<p>Контактная форма</p>)}>
              {t('cta')}
            </HeroButton>

            <Modal isOpen={!!modalContent} onClose={closeModal}>
              {modalContent} ID=8404785778
            </Modal> */}
            <HeroButton onClick={() => openModal(<p>Контактная форма</p>)}>
              <a style={{color: 'white', textDecoration: 'none', fontSize: '17px' }} href="https://t.me/DDesignInvest" target="_blank" rel="noopener noreferrer">
                {/* Получить бесплатную визуализацию */}
                {t('cta')}
              </a>
            </HeroButton>


          </HeroText>

          <HeroImageContainer>
            <FrontImage loading="lazy" src={frontImage} alt="3D Design Front" />
          </HeroImageContainer>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
