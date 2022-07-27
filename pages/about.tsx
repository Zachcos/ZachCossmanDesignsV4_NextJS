import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/About.module.css';

import Footer from '../components/footer';
import zachImage from '../public/ZachC181.jpg';

const About: NextPage = () => {
  return (
    <div
      className={styles.aboutWrapper}
      // variants={aniVariants.parent}
      // initial='initial'
      // animate='animate'
      // exit='exit'
    >
      <section
        className={styles.sectionWrapper}
        // variants={aniVariants.parent}
        // initial='initial'
        // animate='animate'
        // exit='exit'
      >
        <div
          className={styles.titleWrapper}
          // variants={aniVariants.child}
        >
          Quick and clean designs for over a decade
        </div>
        <div
          className={styles.copyWrapper}
          //  variants={aniVariants.child}
        >
          I began my interest in design when I was in my early teens. My cousin
          and I used to find Photoshop tutorials that we liked and would sit on
          the phone for hours while we completed them. (We compared our results
          by sending them through AOL Instant Messenger... ✌🏻👴🏻✌🏻) From there, I
          dabbled in (terrible) Flash animations and eventually found my footing
          tinkering with late-90's web builders like Yahoo! GeoCities, where the
          restrictions of that platform made me want to learn how to write my
          own code.
          <br />
          <br />
          My first sites were Photoshop designs cut into pieces and reassembled
          for the web with code from Adobe Dreamweaver. Just as I was publishing
          my first site, I got my first dose of just how quickly things change
          in the world of web design and development and began the never-ending
          journey of learning the new tools of the trade. Through table layouts,
          floats, and the rest, I have stayed on a constant hunt for the
          technologies that make sites faster and more versatile, with a
          majority of my current work being built on React with GatsbyJS for
          static-site generation.
          <br />
          <br />
          Since the mid 2000's I have been working on a freelance basis with a
          variety of clients, helping them establish brand identities and better
          reach their audiences.
          <br />
          <br />
          When I'm not behind the computer, you can find me acting on stage or
          playing music, or looking for the nearest Starbucks. ☕️
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.titleWrapper}>My Process</div>
        <div className={`${styles.copyWrapper} ${styles.process}`}>
          <div className={`${styles.item} ${styles.mr}`}>
            <div className={styles.subheading}>Design</div>
            From the initial consultation, I work with my clients to fine-tune
            the experience to it's cleanest, simplest form.
          </div>
          <div className={styles.item}>
            <div className={styles.subheading}>Branding</div>I strive to create
            experiences with colors and typography that represent the
            personality and values of my clients.
          </div>
          <div className={`${styles.item} ${styles.mr}`}>
            <div className={styles.subheading}>Web</div>I build-out the
            experience from the design to look great on a variety of full-sized
            screens.
          </div>
          <div className={styles.item}>
            <div className={styles.subheading}>Mobile</div>
            In today's multi-device world, experiences are distilled down to
            ensure content is delivered quickly and clearly.
          </div>
          <div className={`${styles.item} ${styles.grow}`}>
            <div className={styles.subheading}>Continuing Support</div>
            Whether it's making design tweaks or implementing new features, I
            continue to stay in contact with my clients to make sure their site
            is an experience that represents them and their values.
          </div>
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <div className={styles.titleWrapper} />
        <div className={`${styles.copyWrapper} ${styles.statement}`}>
          My goal is to create designs that are unique, but simple and
          straightforward. I use minimalism with an emphasis on typography and
          functional design to bring the best possible experience to the end
          user.
        </div>
      </section>
      <section className={styles.sectionWrapper}>
        <Image src={zachImage} alt='' />
      </section>
      <Footer />
    </div>
  );
};

export default About;
