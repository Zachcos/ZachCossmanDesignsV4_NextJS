import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { featuredProjectData } from '../../data/data';
import styles from '../../styles/ProjectDetail.module.css';
import { Arrow } from '../../components/icons';
import Footer from '../../components/footer';

interface Props {
  project: FeaturedItemProps;
}

const ProjectDetail = ({ project }: Props) => {
  const { title, description, liveUrl, nextProj, assets } = project;
  return (
    <>
      <div
        className={styles.detailsContainer}
        // variants={aniVariants.parent}
        // initial='initial'
        // animate='animate'
        // exit='exit'
      >
        <div
          // variants={aniVariants.parent}
          className={styles.info}
        >
          <h2
            // variants={aniVariants.child}
            className={styles.title}
          >
            {title}
          </h2>
          <div
            // variants={aniVariants.child}
            className={styles.field}
          >
            <span className={styles.fieldLabel}>liveUrl</span>
            <span className={styles.fieldInfo}>
              <a href={liveUrl} target='_blank' rel='noreferrer'>
                {liveUrl}
              </a>
            </span>
          </div>
        </div>
        <div
          // variants={aniVariants.parent}
          className={styles.description}
        >
          {description.map((para: string, index: number) => (
            <p
              key={index}
              // variants={aniVariants.child}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
      <div
        className={styles.assetContainer}
        // variants={aniVariants.child}
      >
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
      </div>
      <div className={styles.nextContainer}>
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
      </div>
      <Footer />
    </>
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
