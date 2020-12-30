import React, { memo, useMemo } from 'react';
import dynamic from 'next/dynamic';

import { PostWrap, PostList, PostItems } from './styles';

import PreloadPost from './Items/PreloadPost';

const Paginator = dynamic(() => import('./Paginator'));
const Item = dynamic(() => import('./Items'), {
  loading: () => <PreloadPost />,
});

const Article = ({ posts, limit, total, skip, setPage }: any) => {
  const currentPage = useMemo(() => (skip === 0 ? 1 : skip / limit + 1), [
    skip,
  ]);
  return (
    <PostWrap maxWidth="lg">
      <PostList container spacing={4}>
        {!posts ? (
          <PostItems item sm={6} md={4} xs={12}>
            <PreloadPost />
          </PostItems>
        ) : (
          posts?.reverse().map((post: any) => {
            const details = {
              id: post.id,
              title: post.title,
              cover: post.cover,
              excerpt: post.excerpt,
              slug: post.slug,
              date: post.date,
              category: post.category.fields.slug,
            };

            return (
              <PostItems item sm={6} md={4} xs={12} key={post.id}>
                <Item {...details} />
              </PostItems>
            );
          })
        )}
      </PostList>

      <Paginator
        currentPage={currentPage}
        limit={limit}
        total={total}
        setPage={setPage}
      />
    </PostWrap>
  );
};

export default memo(Article);
