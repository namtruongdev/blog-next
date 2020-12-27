import React, { ReactElement } from 'react';
import { GetStaticProps } from 'next';

import { client } from '../utils';
import Layout from '../components/Layout';
import Header from '../components/Header';
// const Article = loadable(() => import('../components/Articles'));

type Slogan = [string, string];

const IndexPage = ({ posts, categories }: any): ReactElement => {
  console.log(posts[0].fields.category);

  const strings: Slogan = [
    "LẬP TRÌNH <span style='font-weight: 400'>BÀN CHÂN</span>",
    "LẬP TRÌNH <span style='font-weight: 400'>BẢN THÂN</span>",
  ];

  return (
    <>
      <Layout>
        <Header strings={strings} categories={categories} />
        <main id="main" className="main">
          {/* <Article data={data} /> */}
          {posts.map((post: any, index: number) => (
            <h1 key={index}>{post.fields.title}</h1>
          ))}
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.getEntries({
    content_type: 'article',
  });
  const categories = await client.getEntries({
    content_type: 'category',
  });

  return {
    props: {
      posts: posts.items,
      categories: categories.items,
    },
  };
};

export default IndexPage;
