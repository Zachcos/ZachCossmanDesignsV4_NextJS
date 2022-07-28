import React from 'react';
import styles from '../../styles/Work.module.css';
import { featuredProjectData, otherProjectData } from '../../data/data';
import Image from 'next/image';

import Footer from '../../components/footer';
import FeaturedItem from '../../components/featuredItem';
import { GetStaticProps } from 'next';

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

//? Look into how to implement NextPage
const Work = ({ featured, other }: Props) => {
  return (
    <>
      <div
        className={styles.workWrapper}
        // variants={aniVariants.parent}
        // initial='initial'
        // animate='animate'
        // exit='exit'
      >
        <div
          className={styles.featureWrapper}
          // variants={aniVariants.parent}
        >
          <div
            className={styles.wrapperHeading}
            // variants={aniVariants.child}
          >
            Featured Projects
          </div>
          {featured.map((item: FeaturedItemProps) => (
            <FeaturedItem
              key={item.id}
              {...item}
              // {...aniVariants.child}
            />
          ))}
        </div>
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
      </div>
      <Footer />
    </>
  );
};

export default Work;
