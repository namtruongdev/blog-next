import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import {
  getAllCategory,
  getIdCategoryBySlug,
  getPostByCategory,
} from '../../utils';

import { Post } from '../../types';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Article from '../../components/Articles';

type Slogan = string[];

const Category = ({ posts, categories }: { posts: Post; categories: any }) => {
  const strings: Slogan = [categories[0].title.toUpperCase()];

  return (
    <Layout>
      <Header strings={strings} categories={categories} />
      <main id="main" className="main">
        <Article posts={posts} />
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategory();
  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
        id: category.id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categories = await getAllCategory();
  const id = await getIdCategoryBySlug(params?.slug as string);
  const posts = await getPostByCategory(id);

  return {
    props: {
      posts: posts.posts,
      categories: categories,
    },
  };
};

export default Category;
