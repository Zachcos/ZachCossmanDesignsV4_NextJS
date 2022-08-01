import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeUpIn } from '../data/animations';

const FeaturedItemWrapper = styled(motion.div)`
  height: 550px;
  margin: 0 0 100px 0;
  position: relative;
  width: 100%;
  .imageFrame {
    height: 550px;
    margin-bottom: 50px;
    overflow: hidden;
    position: relative;
    width: 100%;
    img {
      height: 100%;
      object-fit: cover;
      position: relative;
      top: 0;
      transition: 0.3s ease-out;
      width: 100%;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .title {
    color: var(--color-darkGrey);
    font-family: 'Oswald', sans-serif;
    font-size: var(--font-base);
    font-weight: 100;
    margin-bottom: 20px;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  @media screen and (max-width: 630px) {
    height: 350px;

    .imageFrame {
      height: 350px;
    }
  }
`;

interface Props {
  slug: string;
  portImg: string;
  title: string;
}

const FeaturedItem = ({ slug, portImg, title }: Props) => {
  return (
    <FeaturedItemWrapper variants={fadeUpIn}>
      <Link href={`/work/${slug}`} scroll={false}>
        <a>
          <div className='imageFrame'>
            <Image src={portImg} alt='' layout='fill' objectFit='cover' />
          </div>
          <div className='title'>{title}</div>
        </a>
      </Link>
    </FeaturedItemWrapper>
  );
};

export default FeaturedItem;
