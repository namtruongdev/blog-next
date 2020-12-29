import React, { ReactElement } from 'react';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import { getAllPost, getAllCategory } from '../utils';
import Layout from '../components/Layout';
import Header from '../components/Header';

import Article from '../components/Articles';

type Slogan = [string, string];

const IndexPage: NextPage = ({ articles, categories }: any): ReactElement => {
  const strings: Slogan = [
    "LẬP TRÌNH <span style='font-weight: 400'>BÀN CHÂN</span>",
    "LẬP TRÌNH <span style='font-weight: 400'>BẢN THÂN</span>",
  ];

  return (
    <>
      <Layout>
        <Header strings={strings} categories={categories} />
        <main id="main" className="main">
          <Article {...articles} />
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllPost();
  const categories = await getAllCategory();

  return {
    props: {
      articles,
      categories: categories,
    },
  };
};

export default IndexPage;
