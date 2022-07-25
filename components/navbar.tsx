import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav
    // animate={{ top: shouldShow || isMobile ? 0 : '-120px' }}
    // initial={{ top: 0 }}
    // transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      <div className='logoContainer'>
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
      <div className='nav-items'>
        <Link
          href='/work'
          aria-label='work'
          className='text-link'
          // onClick={() => setIsOpen(false)}
        >
          work
        </Link>
        <Link
          href='/about'
          aria-label='about'
          className='text-link'
          // onClick={() => setIsOpen(false)}
        >
          about
        </Link>
        <a
          href='mailto: zachcos@gmail.com?subject=Hey Zach!'
          aria-label='email'
          className='text-link'
        >
          email me
        </a>
        <a
          href='https://behance.net/Zachcos'
          target='_blank'
          rel='noreferrer'
          className='icon-link'
          aria-label='behance'
        >
          Behance link
          {/* <Behance /> */}
        </a>
        <a
          href='https://github.com/Zachcos'
          target='_blank'
          rel='noreferrer'
          className='icon-link'
          aria-label='github'
        >
          Github link
          {/* <Github /> */}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
