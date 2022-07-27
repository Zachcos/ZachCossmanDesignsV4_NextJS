import React from 'react';
import Link from 'next/link';
import styles from '../styles/FeaturedItem.module.css';

const FeaturedItem = () => {
  return (
    <div
      className={styles.wrapper}
      // {...variants}
    >
      <Link
        href='#'
        // href={item.slug}
      >
        <>
          <div className={styles.imageFrame}>
            <img
              // src={item.portImg}
              alt=''
            />
          </div>
          <div className={styles.title}>{/* {item.title} */}</div>
        </>
      </Link>
    </div>
  );
};

export default FeaturedItem;
