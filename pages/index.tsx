import React, { ReactElement } from 'react';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import { client } from '../utils';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Article = dynamic(() => import('../components/Articles'));

type Slogan = [string, string];

const IndexPage: NextPage = ({ posts, categories }: any): ReactElement => {
  console.log(posts);

  const strings: Slogan = [
    "LẬP TRÌNH <span style='font-weight: 400'>BÀN CHÂN</span>",
    "LẬP TRÌNH <span style='font-weight: 400'>BẢN THÂN</span>",
  ];

  return (
    <>
      <Layout>
        <Header strings={strings} categories={categories} />
        <main id="main" className="main">
          <Article data={posts} />
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.getEntries({
    include: 5,
    limit: 2,
  });
  const categories = await client.getEntries({
    content_type: 'category',
  });

  return {
    props: {
      posts: posts,
      categories: categories.items,
    },
  };
};

export default IndexPage;
