import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { featuredProjectData } from '../../data/data';
import styles from '../../styles/ProjectDetail.module.css';
import { Arrow } from '../../components/icons';
import Footer from '../../components/footer';
import { motion } from 'framer-motion';
import { fadeUpIn, fadeUpInWithChildren, stagger } from '../../data/animations';

interface Props {
  project: FeaturedItemProps;
}

const ProjectDetail = ({ project }: Props) => {
  const { title, description, liveUrl, nextProj, assets } = project;
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={stagger}
    >
      <motion.div className={styles.detailsContainer} variants={stagger}>
        <motion.div className={styles.info} variants={fadeUpInWithChildren}>
          <motion.h2 className={styles.title} variants={fadeUpIn}>
            {title}
          </motion.h2>
          <motion.div className={styles.field} variants={fadeUpInWithChildren}>
            <motion.span className={styles.fieldLabel} variants={fadeUpIn}>
              liveUrl
            </motion.span>
            <motion.span className={styles.fieldInfo} variants={fadeUpIn}>
              <a href={liveUrl} target='_blank' rel='noreferrer'>
                {liveUrl}
              </a>
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.description}
          variants={fadeUpInWithChildren}
        >
          {description.map((para: string, index: number) => (
            <motion.p key={index} variants={fadeUpIn}>
              {para}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className={styles.assetContainer} variants={fadeUpIn}>
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
      <motion.div className={styles.nextContainer} variants={fadeUpIn}>
        <div className={styles.nextDetails}>
          <div className={styles.nextLabel}>Next Project</div>
          <div className={styles.nextProjectName}>
            <Link href={`/work${nextProj.slug}`}>
              <a>
                {nextProj.title}
                <Arrow />
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </motion.div>
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
