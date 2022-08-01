import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { featuredProjectData, otherProjectData } from '../../data/data';
import { fadeUpIn, fadeUpInWithChildren, stagger } from '../../data/animations';
import FeaturedItem from '../../components/featuredItem';
import Footer from '../../components/footer';

const PageWrapper = styled(motion.div)`
  .workWrapper {
    margin: 270px 0 200px 0;
    position: relative;
    width: 100%;
  }
  .featuredWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 150px;
    position: relative;
    width: 100%;
  }
  .wrapperHeading {
    color: var(--color-accent);
    font-family: 'Oswald', sans-serif;
    font-size: var(--font-h2);
    margin-bottom: 100px;
    position: relative;
    text-transform: uppercase;
    width: 100%;
  }
  .otherWrapper {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
  .otherProjectWrapper {
    height: 275px;
    margin: 25px;
    overflow: hidden;
    width: 275px;
    img {
      transition: 0.15s ease-out;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 856px) {
    .otherProjectWrapper {
      height: 200px;
      margin: 15px;
      width: 200px;
    }
  }
  @media screen and (max-width: 630px) {
    .workWrapper {
      margin: 170px 0 100px 0;
    }
    .featuredWrapper {
      margin-bottom: 100px;
    }
    .wrapperHeading {
      font-size: var(--font-h3);
      text-align: center;
    }
    .otherProjectWrapper {
      height: 130px;
      margin: 15px 0;
      width: 130px;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      featured: featuredProjectData,
      other: otherProjectData,
    },
  };
};

interface Props {
  featured: FeaturedItemProps[];
  other: OtherItemProps[];
}

const Work: NextPage<Props> = ({ featured, other }) => {
  return (
    <PageWrapper
      initial='initial'
      animate='animate'
      exit='exit'
      variants={stagger}
    >
      <motion.div className='workWrapper' variants={fadeUpIn}>
        <motion.div className='featureWrapper' variants={fadeUpInWithChildren}>
          <motion.div
            className='wrapperHeading'
            variants={fadeUpInWithChildren}
          >
            Featured Projects
          </motion.div>
          {featured.map((item: FeaturedItemProps) => (
            <FeaturedItem key={item.id} {...item} />
          ))}
        </motion.div>
        <div className='otherWrapper'>
          <div className='wrapperHeading'>Other Projects</div>
          {other.map((item: OtherItemProps) => (
            <div className='otherProjectWrapper' key={item.id}>
              <a href={item.behanceUrl} target='_blank' rel='noreferrer'>
                <Image
                  src={item.thumbImg}
                  alt=''
                  objectFit='cover'
                  width={275}
                  height={275}
                />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </PageWrapper>
  );
};

export default Work;
