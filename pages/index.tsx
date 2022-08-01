import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CtaBtn from '../components/ctaBtn';
import { fadeUpIn, stagger } from '../data/animations';

const HeroContainer = styled(motion.div)`
  margin-top: 220px;
  position: relative;
  width: 695px;
  .heroDisplayText {
    color: var(--color-accent);
    font-family: 'Oswald', sans-serif;
    font-size: var(--font-h1);
    font-weight: 400;
    line-height: 1.2em;
    margin-bottom: 50px;
    position: relative;
    text-transform: uppercase;
  }
  .heroDisplayCopy {
    line-height: 2em;
    margin-bottom: 50px;
    position: relative;
  }
  .aboutLink {
    text-decoration: none;
    color: var(--color-lightGrey);
    position: relative;
    &:after {
      background: var(--color-accent);
      bottom: -8px;
      content: '';
      height: 3px;
      left: 0;
      opacity: 0.2;
      position: absolute;
      transition: all 0.15s ease-out;
      width: 100%;
    }
    &:hover:after {
      bottom: -4px;
      opacity: 1;
    }
  }
  @media screen and (max-width: 865px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    width: 100%;
    .heroDisplayText {
      margin-bottom: 80px;
      text-align: center;
    }
    .heroDisplayCopy {
      margin-bottom: 120px;
      text-align: center;
    }
    .ctaContainer {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 630px) {
    margin-top: 150px;
    .heroDisplayText {
      font-size: var(--font-h3);
      margin-bottom: 60px;
    }
    .heroDisplayCopy {
      margin-bottom: 60px;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <HeroContainer initial='initial' animate='animate' exit='exit'>
      <motion.div variants={stagger}>
        <motion.h1 className='heroDisplayText' variants={fadeUpIn}>
          Hi, I'm Zach — I design and develop websites
        </motion.h1>
        <motion.p className='heroDisplayCopy' variants={fadeUpIn}>
          For over 10 years I've been designing and developing sites and web
          experiences for companies and creative individuals. Check out my work,
          learn more{' '}
          <Link href='/about' aria-label='about' scroll={false}>
            <a className='aboutLink'>about me</a>
          </Link>
          , and get in touch...
        </motion.p>
        <motion.div variants={fadeUpIn} className='ctaContainer'>
          <CtaBtn />
        </motion.div>
      </motion.div>
    </HeroContainer>
  );
};

export default Home;
