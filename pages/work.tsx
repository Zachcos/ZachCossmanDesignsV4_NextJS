import React from 'react';
import styles from '../styles/Work.module.css';
import type { NextPage } from 'next';

import Footer from '../components/footer';

const Work: NextPage = () => {
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
          {/* 
          //! Iterate through featured projects
          {data.featured.edges.map((item) => (
            <div className={styles.featuredItem}
              // key={item.node.id}
              // item={item.node}
              // {...aniVariants.child}
            />
          ))} */}
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
