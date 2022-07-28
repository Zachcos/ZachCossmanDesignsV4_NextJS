import React from 'react';
import styles from '../styles/Work.module.css';
import { featuredProjectData, otherProjectData } from '../data/data';
import Image from 'next/image';

import Footer from '../components/footer';
import FeaturedItem from '../components/featuredItem';

export const getStaticProps = async () => {
  return {
    props: {
      featured: featuredProjectData,
      other: otherProjectData,
    },
  };
};

interface FeaturedItemProps {
  title: string;
  description: string[];
  slug: string;
  liveUrl: string;
  portImg: string;
  nextProj: {
    title: string;
    slug: string;
  };
  assets: string[];
  map: Function;
}

interface OtherItemProps {
  thumbImg: string;
  behanceUrl: string;
  map: Function;
}

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
              key={item.title}
              {...item}
              // {...aniVariants.child}
            />
          ))}
        </div>
        <div className={styles.otherWrapper}>
          <div className={styles.wrapperHeading}>Other Projects</div>
          {other.map((item: OtherItemProps) => (
            <div className={styles.otherProjectWrapper} key={1}>
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
