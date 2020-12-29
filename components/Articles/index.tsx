import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { PostWrap, PostList, PostItems } from './styles';

const Paginator = dynamic(() => import('./Paginator'));
const Item = dynamic(() => import('./Items'));

const Article = ({ posts, limit, total }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <PostWrap maxWidth="lg">
      <PostList container spacing={4}>
        {posts.map((post: any) => {
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
        })}
      </PostList>

      <Paginator currentPage={currentPage} limit={limit} total={total} />
    </PostWrap>
  );
};

export default Article;
