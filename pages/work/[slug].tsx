import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { featuredProjectData } from '../../data/data';
import styled from 'styled-components';
import { colors, font, breakpoints } from '../../data/variables';
import { Arrow } from '../../components/icons';
import Footer from '../../components/footer';
import { motion } from 'framer-motion';
import { fadeUpIn, fadeUpInWithChildren, stagger } from '../../data/animations';

const FullWrapper = styled(motion.div)`
  .detailsContainer {
    display: flex;
    margin: 270px 0 100px 0;
    position: relative;
    width: 100%;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-right: 110px;
    position: relative;
  }
  .title {
    color: ${colors.accent};
    font-family: 'Oswald', sans-serif;
    font-size: ${font.h3};
    font-weight: 400;
    margin-bottom: 40px;
    position: relative;
    text-transform: uppercase;
  }
  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    position: relative;
  }
  .fieldLabel {
    color: ${colors.lightGrey};
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: 10px;
    opacity: 0.7;
    text-transform: uppercase;
  }
  .fieldInfo {
    font-size: ${font.h5};
    a {
      color: ${colors.lightGrey};
      position: relative;
      text-decoration: none;
    }
    &:after {
      background: ${colors.accent};
      bottom: -12px;
      content: '';
      height: 3px;
      left: 0;
      opacity: 0;
      position: absolute;
      transition: 0.15s ease-out;
      width: 100%;
    }
    &:hover:after {
      bottom: -7px;
      opacity: 1;
    }
  }
  .description {
    p {
      line-height: 2rem;
      margin-bottom: 2.5rem;
      position: relative;
    }
  }
  .assetContainer {
    position: relative;
    span {
      display: block;
      margin-bottom: 50px !important;
    }
    img {
      margin-bottom: 50px;
      width: 100%;
    }
  }
  .nextContainer {
    align-items: center;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    height: 100px;
    justify-content: flex-end;
    margin-bottom: 120px;
    padding-bottom: 60px;
  }
  .nextDetails {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  .nextLabel {
    color: ${colors.lightGrey};
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: 20px;
    opacity: 0.7;
    text-transform: uppercase;
  }
  .nextProjectName {
    font-size: ${font.h5};
    position: relative;
    a {
      color: ${colors.lightGrey};
      padding-right: 50px;
      text-decoration: none;
      &:hover svg {
        fill: ${colors.accent};
        right: 0;
      }
    }
    svg {
      margin-left: 10px;
      position: absolute;
      right: 10px;
      transition: all 0.15s ease-out;
    }
  }

  @media screen and (max-width: 1000px) {
    .detailsContainer {
      flex-direction: column;
    }
    .info {
      flex-direction: column;
      flex-wrap: wrap;
      margin-bottom: 75px;
      width: 100%;
    }
    .title {
      font-size: ${font.h2};
      margin-bottom: 50px;
      width: 100%;
    }
  }
  @media screen and (max-width: ${breakpoints.tablet}) {
    .nextContainer {
      width: 50%;
    }
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    .detailsContainer {
      margin: 160px 0 100px 0;
    }
    .info {
      margin-bottom: 50px;
    }
    .title {
      font-size: ${font.h4};
    }
    .field {
      width: 100%;
    }
    .fieldLabel {
      font-size: 0.7rem;
    }
    .fieldInfo {
      font-size: ${font.base};
    }
    .nextContainer {
      width: 100%;
    }
  }
`;

interface Props {
  project: FeaturedItemProps;
}

const ProjectDetail = ({ project }: Props) => {
  const { title, description, liveUrl, nextProj, assets } = project;
  return (
    <FullWrapper
      initial='initial'
      animate='animate'
      exit='exit'
      variants={stagger}
    >
      <motion.div className='detailsContainer' variants={stagger}>
        <motion.div className='info' variants={fadeUpInWithChildren}>
          <motion.h2 className='title' variants={fadeUpIn}>
            {title}
          </motion.h2>
          <motion.div className='field' variants={fadeUpInWithChildren}>
            <motion.span className='fieldLabel' variants={fadeUpIn}>
              liveUrl
            </motion.span>
            <motion.span className='fieldInfo' variants={fadeUpIn}>
              <a href={liveUrl} target='_blank' rel='noreferrer'>
                {liveUrl}
              </a>
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div className='description' variants={fadeUpInWithChildren}>
          {description.map((para: string, index: number) => (
            <motion.p key={index} variants={fadeUpIn}>
              {para}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className='assetContainer' variants={fadeUpIn}>
        {assets.map((asset: string, index: number) => (
          <Image
            src={asset}
            alt=''
            key={index}
            width={3200}
            height={1550}
            objectFit='contain'
          />
        ))}
      </motion.div>
      <motion.div className='nextContainer' variants={fadeUpIn}>
        <div className='nextDetails'>
          <div className='nextLabel'>Next Project</div>
          <div className='nextProjectName'>
            <Link href={`/work${nextProj.slug}`} scroll={false}>
              <a>
                {nextProj.title}
                <Arrow />
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </FullWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return { props: {} };
  }

  const project = featuredProjectData.find((item) => item.slug === params.slug);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = featuredProjectData.map((item: FeaturedItemProps) => ({
    params: { slug: item.slug.toString() },
  }));
  return { paths, fallback: false };
};

export default ProjectDetail;
