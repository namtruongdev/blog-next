import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import {
  getPostByTag,
  getAllTag,
  getIdTagBySlug,
  getAllCategory,
} from '../../utils';

import { Post } from '../../types';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Article from '../../components/Articles';

type Slogan = string[];

const Tag = ({ posts, categories }: { posts: Post; categories: any }) => {
  const slogan: Slogan = useMemo(
    () => [posts[0].tags[0].fields.title.toUpperCase()],
    [posts]
  );

  return (
    <Layout>
      <Header strings={slogan} categories={categories} />
      <main id="main" className="main">
        <Article posts={posts} />
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTag();
  return {
    paths: tags.map((tag) => ({
      params: {
        slug: tag.slug,
        id: tag.id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categories = await getAllCategory();

  const id = await getIdTagBySlug(params?.slug as string);
  const posts = await getPostByTag(id);

  return {
    props: {
      posts: posts.posts,
      categories: categories,
    },
  };
};

export default Tag;
