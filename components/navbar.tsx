import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Behance, Github, Logo } from './icons';

const NavBarWrapper = styled.nav`
  align-items: center;
  background: var(--color-darkGrey);
  display: flex;
  height: 120px;
  left: 0;
  position: fixed;
  top: -120px;
  transition: top 0.25s ease-out;
  width: 100%;
  z-index: 1000;
  .logoContainer {
    height: 45px;
    margin: 0 auto 0 60px;
    width: 32px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .navItems {
    align-items: center;
    display: flex;
    font-family: 'Oswald', sans-serif;
    font-size: var(--font-base);
    justify-content: space-between;
    margin-right: 60px;
    width: 400px;
  }
  .textLink,
  .iconLink {
    color: var(--color-lightGrey);
    cursor: pointer;
    padding: 5px;
    position: relative;
    text-decoration: none;
  }
  .textLink {
    &:after {
      background: var(--color-accent);
      bottom: -10px;
      content: '';
      height: 3px;
      left: 0;
      opacity: 0;
      position: absolute;
      transition: 0.15s ease-out;
      width: 100%;
    }
    &:hover:after {
      bottom: -5px;
      opacity: 1;
    }
  }
  .iconLink {
    transition: all 0.2s ease-out;
    z-index: 1;
    &:after {
      background: var(--color-accent);
      border-radius: 50%;
      bottom: 50%;
      content: '';
      height: 0px;
      left: 50%;
      opacity: 1;
      position: absolute;
      transform: translate(-50%, 50%);
      transition: all 0.2s ease-out;
      width: 0px;
      z-index: -1;
    }
    svg:hover {
      fill: var(--color-darkGrey);
    }
    &:hover:after {
      height: 50px;
      width: 50px;
    }
  }
  .hamburger {
    align-items: center;
    display: none;
    flex-direction: column;
    height: 32px;
    justify-content: center;
    margin-right: 40px;
    padding: 20px;
    position: relative;
    width: 25px;
    z-index: 100;
    span {
      background: white;
      display: block;
      height: 3px;
      margin-bottom: 7px;
      position: relative;
      transition: 0.2s ease-out;
      width: 100%;
    }
    &.open {
      span {
        &:first-child {
          top: 5px;
          transform: rotate(-45deg);
        }
        &:nth-child(2) {
          top: -5px;
          transform: rotate(45deg);
        }
      }
    }
  }
  @media screen and (max-width: 630px) {
    .logoContainer {
      margin: 0 auto 0 40px;
    }
    .navItems {
      background: var(--color-darkGrey);
      display: flex;
      flex-direction: column;
      font-size: var(--font-h5);
      height: 100vh;
      justify-content: space-around;
      margin-right: 0;
      position: fixed;
      right: -100%;
      top: 0;
      transition: 0.275s ease-out;
      width: 100%;
      z-index: 1;
    }
    .navItems.open {
      right: 0;
    }
    .hamburger {
      display: flex;
    }
    .iconLink:after {
      bottom: 51%;
    }
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 630) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShow(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <NavBarWrapper style={{ top: shouldShow || isMobile ? 0 : '-120px' }}>
      <div className='logoContainer'>
        <Link href='/' aria-label='home' scroll={false}>
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div
        className={'hamburger' + (isOpen ? ' open' : '')}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
      </div>
      <div className={'navItems' + (isOpen ? ' open' : '')}>
        <Link href='/work' aria-label='work' scroll={false}>
          <a className='textLink' onClick={() => setIsOpen(false)}>
            work
          </a>
        </Link>
        <Link href='/about' aria-label='about' scroll={false}>
          <a className='textLink' onClick={() => setIsOpen(false)}>
            about
          </a>
        </Link>
        <a
          href='mailto: zachcos@gmail.com?subject=Hey Zach!'
          aria-label='email'
          className='textLink'
        >
          email me
        </a>
        <a
          href='https://behance.net/Zachcos'
          target='_blank'
          rel='noreferrer'
          aria-label='behance'
          className='iconLink'
        >
          <Behance />
        </a>
        <a
          href='https://github.com/Zachcos'
          target='_blank'
          rel='noreferrer'
          aria-label='github'
          className='iconLink'
        >
          <Github />
        </a>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
