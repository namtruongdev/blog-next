import React, { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getPostBySlug } from '../../utils';

const Post = ({ post }: any): ReactElement => {
  console.log(post);

  return (
    <div>
      <h1>{post.fields.title}</h1>
      <main>{documentToReactComponents(post.fields.content)}</main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getEntries({
    content_type: 'article',
  });

  return {
    paths: data.items.map((item: any) => ({
      params: {
        slug: item.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const data = await client.getEntries({
    content_type: 'article',
    'fields.slug': params?.slug,
  });
  return {
    props: {
      post: data.items[0],
    },
  };
};

export default Post;
