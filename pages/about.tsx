import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeUpIn, fadeUpInWithChildren, stagger } from '../data/animations';

import Footer from '../components/footer';
import zachImage from '../public/images/ZachC181.jpg';

const AboutWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  .sectionWrapper {
    display: flex;
    margin: 200px 0;
    position: relative;
    width: 100%;
    img {
      width: 100%;
    }
    &:first-child {
      margin-top: 270px;
    }
  }
  .titleWrapper {
    color: var(--color-accent);
    font-family: 'Oswald';
    font-size: var(--font-h2);
    line-height: 1.2em;
    margin-right: 110px;
    position: relative;
    text-transform: uppercase;
    width: 30%;
  }
  .copyWrapper {
    font-size: var(--font-base);
    line-height: 2rem;
    position: relative;
    width: 65%;
  }
  .process {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      margin-bottom: 60px;
      width: 37%;
      &.mr {
        margin-right: 100px;
      }
      &.grow {
        flex-grow: 2;
      }
      .subheading {
        color: var(--color-lightGrey);
        font-family: 'Oswald', sans-serif;
        font-size: var(--font-h4);
        margin-bottom: 15px;
        text-transform: uppercase;
      }
    }
  }

  .statement {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
  @media screen and (max-width: 865px) {
    .sectionWrapper {
      flex-direction: column;
    }
    .titleWrapper {
      line-height: 1.5em;
      margin-bottom: 80px;
      width: 80%;
    }
    .copyWrapper {
      width: 100%;
    }
  }

  @media screen and (max-width: 630px) {
    .sectionWrapper {
      margin: 100px 0;
      &:first-child {
        margin: 150px 0;
      }
    }
    .titleWrapper {
      font-size: var(--font-h3);
      margin-bottom: 60px;
      width: 100%;
    }
    .process {
      .item {
        width: 100%;
      }
      .mr {
        margin-right: 0;
      }
    }
  }
`;

const About: NextPage = () => {
  return (
    <AboutWrapper
      initial='initial'
      animate='animate'
      exit='exit'
      variants={fadeUpIn}
    >
      <motion.section className='sectionWrapper' variants={stagger}>
        <motion.div className='titleWrapper' variants={fadeUpIn}>
          Quick and clean designs for over a decade
        </motion.div>
        <motion.div className='copyWrapper' variants={fadeUpInWithChildren}>
          <motion.span variants={fadeUpIn}>
            I began my interest in design when I was in my early teens. My
            cousin and I used to find Photoshop tutorials that we liked and
            would sit on the phone for hours while we completed them. (We
            compared our results by sending them through AOL Instant
            Messenger... ✌🏻👴🏻✌🏻) From there, I dabbled in (terrible) Flash
            animations and eventually found my footing tinkering with late-90's
            web builders like Yahoo! GeoCities, where the restrictions of that
            platform made me want to learn how to write my own code.
          </motion.span>
          <motion.span variants={fadeUpIn}>
            My first sites were Photoshop designs cut into pieces and
            reassembled for the web with code from Adobe Dreamweaver. Just as I
            was publishing my first site, I got my first dose of just how
            quickly things change in the world of web design and development and
            began the never-ending journey of learning the new tools of the
            trade. Through table layouts, floats, and the rest, I have stayed on
            a constant hunt for the technologies that make sites faster and more
            versatile, with a majority of my current work being built on React
            with GatsbyJS for static-site generation.
          </motion.span>
          <span>
            Since the mid 2000's I have been working on a freelance basis with a
            variety of clients, helping them establish brand identities and
            better reach their audiences.
          </span>
          <span>
            When I'm not behind the computer, you can find me acting on stage or
            playing music, or looking for the nearest Starbucks. ☕️
          </span>
        </motion.div>
      </motion.section>
      <section className='sectionWrapper'>
        <div className='titleWrapper'>My Process</div>
        <div className='copyWrapper'>
          <div className='process'>
            <div className='item mr'>
              <div className='subheading'>Design</div>
              From the initial consultation, I work with my clients to fine-tune
              the experience to it's cleanest, simplest form.
            </div>
            <div className='item'>
              <div className='subheading'>Branding</div>I strive to create
              experiences with colors and typography that represent the
              personality and values of my clients.
            </div>
            <div className='item mr'>
              <div className='subheading'>Web</div>I build-out the experience
              from the design to look great on a variety of full-sized screens.
            </div>
            <div className='item'>
              <div className='subheading'>Mobile</div>
              In today's multi-device world, experiences are distilled down to
              ensure content is delivered quickly and clearly.
            </div>
            <div className='item grow'>
              <div className='subheading'>Continuing Support</div>
              Whether it's making design tweaks or implementing new features, I
              continue to stay in contact with my clients to make sure their
              site is an experience that represents them and their values.
            </div>
          </div>
        </div>
      </section>
      <section className='sectionWrapper'>
        <div className='titleWrapper' />
        <div className='copyWrapper statement'>
          My goal is to create designs that are unique, but simple and
          straightforward. I use minimalism with an emphasis on typography and
          functional design to bring the best possible experience to the end
          user.
        </div>
      </section>
      <section className='sectionWrapper'>
        <Image src={zachImage} alt='' placeholder='blur' />
      </section>
      <Footer />
    </AboutWrapper>
  );
};

export default About;
