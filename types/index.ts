export type Theme = 'light' | 'dark';

export enum BLOCKS {
  DOCUMENT = 'document',
  PARAGRAPH = 'paragraph',
  HEADING_1 = 'heading-1',
  HEADING_2 = 'heading-2',
  HEADING_3 = 'heading-3',
  OL_LIST = 'ordered-list',
  UL_LIST = 'unordered-list',
  LIST_ITEM = 'list-item',
  HR = 'hr',
  QUOTE = 'blockquote',
  EMBEDDED_ENTITY = 'embedded-entry-block',
  EMBEDDED_ASSET = 'embedded-asset-block',
}

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  slug: string;
  category: { sys: any; fields: any };
  tags: { sys: object; fields: object }[];
  date: string;
  readingTime: any;
}[];
