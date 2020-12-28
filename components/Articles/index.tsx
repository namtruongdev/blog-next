import React, { useEffect, useState } from 'react';

import { PostWrap, PostList, PostItems } from './styles';

import Item from './Items';
import Paginator from './Paginator';

const Article = ({ data }: any) => {
  const posts = [];
  let currentPage = 1;

  return (
    <PostWrap maxWidth="lg">
      <PostList container spacing={4}>
        {/* {posts.map((post, index) => {
          const details = {
            title: post.node.frontmatter.title,
            thumbnail: post.node.frontmatter.thumbnail,
            excerpt: post.node.frontmatter.excerpt,
            permalink: post.node.frontmatter.permalink,
            date: post.node.frontmatter.date,
            timeToRead: post.node.timeToRead,
          }

          return (
            <PostItems item sm={6} md={4} xs={12} key={index}>
              <Item
                data={details}
              />
            </PostItems>
          )
        })} */}
      </PostList>

      <Paginator />
    </PostWrap>
  );
};

export default Article;
