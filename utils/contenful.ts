import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

const CONTENT_TYPE_ARTICLE = 'article';
const CONTENT_TYPE_CATEGORY = 'category';

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

export const getAllPost = async (
  { limit, skip, tag }: { limit?: number; skip?: number; tag?: string } = {
    limit: 1,
    skip: 0,
    tag: '',
  }
) => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_ARTICLE,
    limit,
    skip,
    'fields.tags.sys.id': tag,
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
      date: fields.date,
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
