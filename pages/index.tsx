import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroDisplayText}>
        Hi, I'm Zach — I design and develop websites
      </h1>
      <p className={styles.heroDisplayCopy}>
        For over 10 years I've been designing and developing sites and web
        experiences for companies and creative individuals. Check out my work,
        learn more{' '}
        <Link href='/about' aria-label='about'>
          <a>about me</a>
        </Link>
        , and get in touch...
      </p>
      {/* <CtaBtn /> */}
    </div>
  );
};

export default Home;
