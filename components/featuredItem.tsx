import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/FeaturedItem.module.css';

interface Props {
  slug: string;
  portImg: string;
  title: string;
}

const FeaturedItem = ({ slug, portImg, title }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link href={`/work/${slug}`}>
        <a>
          <div className={styles.imageFrame}>
            <Image src={portImg} alt='' layout='fill' objectFit='cover' />
          </div>
          <div className={styles.title}>{title}</div>
        </a>
      </Link>
    </div>
  );
};

export default FeaturedItem;
