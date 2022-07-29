import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import CtaBtn from '../components/ctaBtn';
import { fadeUpIn, stagger } from '../data/animations';

const Home: NextPage = () => {
  return (
    <motion.div
      className={styles.heroContainer}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div variants={stagger}>
        <motion.h1 className={styles.heroDisplayText} variants={fadeUpIn}>
          Hi, I'm Zach — I design and develop websites
        </motion.h1>
        <motion.p className={styles.heroDisplayCopy} variants={fadeUpIn}>
          For over 10 years I've been designing and developing sites and web
          experiences for companies and creative individuals. Check out my work,
          learn more{' '}
          <Link href='/about' aria-label='about' scroll={false}>
            <a className={styles.aboutLink}>about me</a>
          </Link>
          , and get in touch...
        </motion.p>
        <motion.div variants={fadeUpIn} className={styles.ctaContainer}>
          <CtaBtn />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
