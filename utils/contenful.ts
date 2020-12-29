import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN || '',
});

const CONTENT_TYPE_ARTICLE = 'article';
const CONTENT_TYPE_CATEGORY = 'category';

export const getPostBySlug = async (slug: any) => {
  const data = await client.getEntries({
    content_type: CONTENT_TYPE_ARTICLE,
    'fields.slug': slug,
  });
  const post = data.items.map(({ sys, fields }: { sys: any; fields: any }) => ({
    id: sys.id,
    title: fields.title,
    body: fields.body,
  }));
  return post;
};
