import React from 'react';
import styled from 'styled-components';
import { colors } from '../data/variables';

const Button = styled.button`
  align-items: center;
  background: ${colors.lightGrey};
  border: none;
  color: ${colors.darkGrey};
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  font-weight: 600;
  height: 65px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: 0.15s ease-out;
  width: 230px;
  &:after {
    background: ${colors.accent};
    bottom: 0;
    content: '';
    height: 5px;
    left: 50%;
    position: absolute;
    transition: 0.15s ease-out;
    width: 0;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

const CtaBtn = () => {
  function handleEmail() {
    window.location.href = 'mailto: Zachcos@gmail.com?subject=Hey Zach!';
  }

  return <Button onClick={handleEmail}>zachcos@gmail.com</Button>;
};

export default CtaBtn;
