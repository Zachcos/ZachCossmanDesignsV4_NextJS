import React from 'react';
import styles from '../../styles/Work.module.css';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { featuredProjectData, otherProjectData } from '../../data/data';
import { fadeUpIn, fadeUpInWithChildren, stagger } from '../../data/animations';
import FeaturedItem from '../../components/featuredItem';
import Footer from '../../components/footer';

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
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={stagger}
    >
      <motion.div className={styles.workWrapper} variants={fadeUpIn}>
        <motion.div
          className={styles.featureWrapper}
          variants={fadeUpInWithChildren}
        >
          <motion.div
            className={styles.wrapperHeading}
            variants={fadeUpInWithChildren}
          >
            Featured Projects
          </motion.div>
          {featured.map((item: FeaturedItemProps) => (
            <FeaturedItem key={item.id} {...item} />
          ))}
        </motion.div>
        <div className={styles.otherWrapper}>
          <div className={styles.wrapperHeading}>Other Projects</div>
          {other.map((item: OtherItemProps) => (
            <div className={styles.otherProjectWrapper} key={item.id}>
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
    </motion.div>
  );
};

export default Work;
