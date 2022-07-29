import React from 'react';
import styles from '../styles/Footer.module.css';
import CtaBtn from './ctaBtn';
import { Behance, Github, Arrow } from './icons';
import { motion } from 'framer-motion';
import { fadeUpIn } from '../data/animations';

const Footer = () => {
  function scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <motion.div className={styles.footerWrapper} variants={fadeUpIn}>
      <div className={styles.cta}>
        <div className={styles.title}>Let's work together</div>
        <div className={styles.copy}>
          What can I help you with? Feel free to drop a line...
        </div>
        <CtaBtn />
      </div>
      <nav className={styles.nav}>
        <div className={styles.attribution}>&copy; Zach Cossman 2020</div>
        <div className={styles.linkWrapper}>
          <a
            href='https://www.behance.net/Zachcos'
            target='_blank'
            rel='noreferrer'
            className={styles.textLink}
          >
            <Behance />
            <span>Behance</span>
          </a>
          <a
            href='https://www.github.com/Zachcos'
            target='_blank'
            rel='noreferrer'
            className={styles.textLink}
          >
            <Github />
            <span>GitHub</span>
          </a>
          <a className={styles.arrow} onClick={scrollUp}>
            <Arrow />
          </a>
        </div>
      </nav>
    </motion.div>
  );
};

export default Footer;
