import React from 'react';
import styles from '../styles/Work.module.css';
import { featuredProjectData, otherProjectData } from '../data/data';

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

interface FeaturedItem {
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

interface OtherItem {
  thumbImg: string;
  behanceUrl: string;
  map: Function;
}

interface Props {
  featured: FeaturedItem[];
  other: OtherItem[];
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
          <FeaturedItem />
          {featured.map((item: any) => (
            // <div
            //   className={styles.featuredItem}
            //   key={item.title}
            //   // item={item}
            //   // {...aniVariants.child}
            // />
            <h1 key='test'>{item.title}</h1>
          ))}
        </div>
        <div className={styles.otherWrapper}>
          <div className={styles.wrapperHeading}>Other Projects</div>
          {
            //! Iterate through other projects
            /* {data.other.edges.map((item: OtherProps) => (
            <div className={styles.otherProjectWrapper} key={item.node.id}>
              <a href={item.node.behanceUrl} target='_blank' rel='noreferrer'>
                <img src={item.node.thumbImg} alt='' />
              </a>
            </div>
          ))} */
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Work;
