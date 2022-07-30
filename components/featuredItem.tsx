import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/FeaturedItem.module.css';
import { motion } from 'framer-motion';
import { fadeUpIn } from '../data/animations';

interface Props {
  slug: string;
  portImg: string;
  title: string;
}

const FeaturedItem = ({ slug, portImg, title }: Props) => {
  return (
    <motion.div className={styles.wrapper} variants={fadeUpIn}>
      <Link href={`/work/${slug}`} scroll={false}>
        <a>
          <div className={styles.imageFrame}>
            <Image src={portImg} alt='' layout='fill' objectFit='cover' />
          </div>
          <div className={styles.title}>{title}</div>
        </a>
      </Link>
    </motion.div>
  );
};

export default FeaturedItem;
