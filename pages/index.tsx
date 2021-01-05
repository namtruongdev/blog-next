import React, { ReactElement, useState, useCallback } from 'react';
import { GetStaticProps, NextPage } from 'next';
import useSWR from 'swr';

import { getAllPost, getAllCategory } from '../utils';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Article from '../components/Articles';

type Slogan = string[];

const IndexPage: NextPage = ({ categories }: any): ReactElement => {
  const [skip, setSkip] = useState<number>(0);

  const strings: Slogan = [
    "LẬP TRÌNH <span style='font-weight: 400'>BẢN THÂN</span>",
  ];

  const { data } = useSWR(
    [skip],
    (skip) => getAllPost({ limit: 9, skip: skip }),
    { refreshInterval: 1000 }
  );

  const setPage = useCallback((skip: number): void => setSkip(skip), [skip]);

  return (
    <>
      <Layout>
        <Header strings={strings} categories={categories} setPage={setPage} />
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
