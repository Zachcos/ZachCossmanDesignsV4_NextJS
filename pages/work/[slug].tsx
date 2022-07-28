import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { featuredProjectData } from '../../data/data';

interface Props {
  project: FeaturedItemProps;
}

const ProjectDetail = ({ project }: Props) => {
  return (
    <>
      <h1 style={{ marginTop: '400px' }}>
        This is a dog named {project.title}
      </h1>
      <p>He is: {project.description}</p>
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
