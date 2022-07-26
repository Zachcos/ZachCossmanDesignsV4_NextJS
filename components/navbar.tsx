import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { Behance, Github } from './icons';

const NavBar = () => {
  return (
    <nav
      className={styles.navbarContainer}
      // animate={{ top: shouldShow || isMobile ? 0 : '-120px' }}
      // initial={{ top: 0 }}
      // transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      <div className={styles.logoContainer}>
        <Link href='/' aria-label='home'>
          logo here
          {/* <img src={logo} alt='' /> */}
        </Link>
      </div>
      <div
        className='hamburger'
        // onClick={() => setIsOpen(!isOpen)}
        // className={isOpen ? 'open' : ''}
      >
        <span />
        <span />
      </div>
      <div className={styles.navItems}>
        <Link href='/work' aria-label='work'>
          <a className={styles.textLink}>work</a>
        </Link>
        <Link href='/about' aria-label='about'>
          <a className={styles.textLink}>about</a>
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
          className='iconLink'
          aria-label='behance'
        >
          <Behance />
        </a>
        <a
          href='https://github.com/Zachcos'
          target='_blank'
          rel='noreferrer'
          className='iconLink'
          aria-label='github'
        >
          <Github />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
