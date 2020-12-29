import React, { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { NextPage } from 'next';
import Image from 'next/image';

import { Typography } from '@material-ui/core';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getPostBySlug, getAllSlug } from '../../utils';

import Layout from '../../components/Layout';
import { BLOCKS } from '../../types';

const Post: NextPage = ({ post }: any): ReactElement => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <main>
        <article>
          {documentToReactComponents(post.body, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <Image
                  src={`https:` + node.data.target.fields.file.url}
                  alt={node.data.target.fields.title}
                  width={node.data.target.fields.file.details.image.width}
                  height={node.data.target.fields.file.details.image.height}
                  layout="intrinsic"
                  draggable="false"
                />
              ),

              [BLOCKS.PARAGRAPH]: (node, children) => (
                <Typography variant="body1" component="p">
                  {children}
                </Typography>
              ),
            },
          })}
        </article>
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const params = await getAllSlug();

  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySlug(params);

  return {
    props: {
      post: post,
    },
  };
};

export default Post;
