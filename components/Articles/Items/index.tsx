import React, { useContext, memo } from 'react';

import { PostTitle, PostInfo, PostTVR, ThumbNail, Excerpt } from './styles';
import Link from 'next/link';

import { ThemeContext } from '../../../context/ThemeContext';

import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import { WhatshotRounded, QueryBuilderRounded } from '@material-ui/icons';

import ViewCounter from './ViewCounter';

const Item = ({
  title,
  slug,
  excerpt,
  date,
  cover,
  category,
  readingTime,
}: any) => {
  const { theme } = useContext(ThemeContext);

  const base = process.env.NEXT_PUBLIC_LOCAL_URL
    ? process.env.NEXT_PUBLIC_URL
    : 'http://localhost:3000/';

  return (
    <Card>
      <CardActionArea>
        <Link href={base + category + '/' + slug}>
          <div>
            <ThumbNail
              src={`https:` + cover}
              width={1200}
              height={630}
              layout="responsive"
              draggable={false}
              alt={title}
            />
          </div>
        </Link>
        <CardContent>
          <Link href={base + category + '/' + slug}>
            <PostTitle theme={theme}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
            </PostTitle>
          </Link>
          <Excerpt variant="body2" color="textSecondary" component="p">
            {excerpt}
          </Excerpt>
        </CardContent>
      </CardActionArea>
      <PostInfo>
        <Typography variant="caption" color="textSecondary">
          <PostTVR>
            <QueryBuilderRounded fontSize="inherit" />
            {` ${date}`}
          </PostTVR>
        </Typography>
        <Typography variant="caption" color="textSecondary">
          <ViewCounter slug={category + '/' + slug} />
        </Typography>
        <Typography variant="caption" color="textSecondary">
          <PostTVR>
            <WhatshotRounded fontSize="inherit" />
            {` ${readingTime} phút đọc`}
          </PostTVR>
        </Typography>
      </PostInfo>
    </Card>
  );
};

export default memo(Item);
