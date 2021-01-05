import * as contentful from 'contentful';

import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import readingTime from 'reading-time';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Post } from '../types';

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

const CONTENT_TYPE_ARTICLE = 'article';
const CONTENT_TYPE_CATEGORY = 'category';
const CONTENT_TYPE_TAG = 'tag';

type GetAllPost = {
  limit: number;
  skip: number;
};

export const getPostBySlug = async (slug: any) => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_ARTICLE,
    'fields.slug': slug.slug,
  });

  const entry: { sys: any; fields: any } = data.items[0];

  return {
    title: entry.fields.title,
    body: entry.fields.body,
  };
};

export const getAllSlug = async () => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_ARTICLE,
  });

  const posts: { sys: any; fields: any }[] = data.items;

  const params = posts.map((post) => ({
    params: {
      category: post.fields.category.fields.slug,
      slug: post.fields.slug,
    },
  }));

  return params;
};

export const getAllPost = async ({ limit, skip }: GetAllPost) => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_ARTICLE,
    limit,
    skip,
    order: '-fields.date',
  });

  const posts = data.items.map(
    ({ sys, fields }: { sys: any; fields: any }) => ({
      id: sys.id,
      title: fields.title,
      excerpt: fields.excerpt,
      cover: fields.cover.fields.file.url,
      slug: fields.slug,
      category: fields.category,
      tags: fields.tags,
      date: formatDistanceToNow(new Date(fields.date), {
        locale: vi,
        addSuffix: true,
      }),
      readingTime: readingTime(documentToPlainTextString(fields.body)),
    })
  );

  const total = data.total;

  return { posts, total, limit, skip };
};

export const getAllCategory = async () => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_CATEGORY,
  });
  const entries: { sys: any; fields: any }[] = data.items;

  const categories = entries.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
  }));

  return categories;
};

export const getIdCategoryBySlug = async (slug: string) => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_CATEGORY,
    'fields.slug': slug,
  });

  return data.items[0].sys.id;
};

export const getPostByCategory = async (category: string) => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_ARTICLE,
    'fields.category.sys.id': category,
    order: '-fields.date',
  });

  const posts: Post = data.items.map(
    ({ sys, fields }: { sys: any; fields: any }) => ({
      id: sys.id,
      title: fields.title,
      excerpt: fields.excerpt,
      cover: fields.cover.fields.file.url,
      slug: fields.slug,
      category: fields.category,
      tags: fields.tags,
      date: formatDistanceToNow(new Date(fields.date), {
        locale: vi,
        addSuffix: true,
      }),
      readingTime: readingTime(documentToPlainTextString(fields.body)),
    })
  );
  return { posts };
};

export const getAllTag = async () => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_TAG,
  });
  const entries: { sys: any; fields: any }[] = data.items;

  const tags = entries.map((entry) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
  }));

  return tags;
};

export const getIdTagBySlug = async (slug: string) => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_TAG,
    'fields.slug': slug,
  });

  return data.items[0].sys.id;
};

export const getPostByTag = async (tag: string) => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_ARTICLE,
    'fields.tags.sys.id': tag,
    order: '-fields.date',
  });

  const posts: Post = data.items.map(
    ({ sys, fields }: { sys: any; fields: any }) => ({
      id: sys.id,
      title: fields.title,
      excerpt: fields.excerpt,
      cover: fields.cover.fields.file.url,
      slug: fields.slug,
      category: fields.category,
      tags: fields.tags,
      date: formatDistanceToNow(new Date(fields.date), {
        locale: vi,
        addSuffix: true,
      }),
      readingTime: readingTime(documentToPlainTextString(fields.body)),
    })
  );
  return { posts };
};
