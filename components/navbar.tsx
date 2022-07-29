import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { Behance, Github, Logo } from './icons';

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
    <nav
      //! Replace with animation library
      className={styles.navbarContainer}
      style={{ top: shouldShow || isMobile ? 0 : '-120px' }}
    >
      <div className={styles.logoContainer}>
        <Link href='/' aria-label='home'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
      </div>
      <div className={`${styles.navItems} ${isOpen ? styles.open : ''}`}>
        <Link href='/work' aria-label='work' scroll={false}>
          <a className={styles.textLink} onClick={() => setIsOpen(false)}>
            work
          </a>
        </Link>
        <Link href='/about' aria-label='about' scroll={false}>
          <a className={styles.textLink} onClick={() => setIsOpen(false)}>
            about
          </a>
        </Link>
        <a
          href='mailto: zachcos@gmail.com?subject=Hey Zach!'
          aria-label='email'
          className={styles.textLink}
        >
          email me
        </a>
        <a
          href='https://behance.net/Zachcos'
          target='_blank'
          rel='noreferrer'
          aria-label='behance'
          className={styles.iconLink}
        >
          <Behance />
        </a>
        <a
          href='https://github.com/Zachcos'
          target='_blank'
          rel='noreferrer'
          aria-label='github'
          className={styles.iconLink}
        >
          <Github />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
