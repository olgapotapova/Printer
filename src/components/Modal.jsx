import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  /* height: 100%; */
`;

const ModalBox = styled.div`
  position: relative;
  margin-top: 5vw;
  background: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 76%;
  width: 76%;
  overflow: scroll;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalBox>
    </Overlay>,
    document.body
  );
};

export default Modal;