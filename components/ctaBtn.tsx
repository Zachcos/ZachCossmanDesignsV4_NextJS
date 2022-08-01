import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  background: var(--color-lightGrey);
  border: none;
  color: var(--color-darkGrey);
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
    background: var(--color-accent);
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
