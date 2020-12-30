import React, { ReactElement, useState, useCallback } from 'react';
import { GetStaticProps, NextPage } from 'next';
import useSWR from 'swr';

import { getAllPost, getAllCategory } from '../utils';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Article from '../components/Articles';

type Slogan = [string, string];

const IndexPage: NextPage = ({ categories }: any): ReactElement => {
  const [skip, setSkip] = useState<number>(0);
  console.log('app render lai');

  const strings: Slogan = [
    "LẬP TRÌNH <span style='font-weight: 400'>BÀN CHÂN</span>",
    "LẬP TRÌNH <span style='font-weight: 400'>BẢN THÂN</span>",
  ];

  const { data } = useSWR([skip], (skip) =>
    getAllPost({ limit: 1, skip: skip })
  );

  const setPage = useCallback((skip: number): void => setSkip(skip), [skip]);

  return (
    <>
      <Layout>
        <Header strings={strings} categories={categories} />
        <main id="main" className="main">
          <Article {...data} setPage={setPage} />
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategory();

  return {
    props: {
      categories: categories,
    },
  };
};

export default IndexPage;
