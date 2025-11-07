import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import cupcakeIcon from '../assets/Cupcake.svg';
import { useTranslation } from 'react-i18next';

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  max-width: 640px;
  background-color: #0099a4;
  color: white;
  border-radius: 16px;
  padding: 24px 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 24px;

  @media (max-width: 600px) {
    margin: 0 auto 16px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 12px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 12px;
`;

const List = styled.ul`
  margin: 0 0 12px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 14px;
  margin-bottom: 6px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const AcceptButton = styled.button`
  background-color: white;
  color: #0099a4;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #e0f7f9;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: 2px solid white;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;

  @media (max-width: 600px) {
    top: 8px;
    right: 8px;
  }
`;

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShowModal(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <ModalWrapper>
      <Icon src={cupcakeIcon} alt="Cupcake icon" />
      <Content>
        <Title>{t('cookie.title')}</Title>
        <Text>
          {t('cookie.intro')}
        </Text>
        {/* <List>
          <ListItem>Запоминать ваши предпочтения и настройки;</ListItem>
          <ListItem>Анализировать поведение на сайте для улучшения сервиса;</ListItem>
          <ListItem>Показывать релевантную рекламу и предложения.</ListItem>
        </List> */}
        <List>
          {t('cookie.benefits', { returnObjects: true }).map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
        <Text>
          {t('cookie.details')}
        </Text>
        <ButtonRow>
          <AcceptButton onClick={handleAccept}>{t('cookie.accept')}</AcceptButton>
        </ButtonRow>
      </Content>
      <CloseButton onClick={handleAccept}>×</CloseButton>
    </ModalWrapper>
  );
};

export default CookieModal;