import React, { useState, useEffect, useContext } from 'react';

import { PostTitle, PostInfo, PostTVR, ThumbNail } from './styles';
import Link from 'next/link';

import { ThemeContext } from '../../../context/ThemeContext';

import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import { WhatshotRounded, QueryBuilderRounded } from '@material-ui/icons';

import Skeleton from '@material-ui/lab/Skeleton';
// import ViewCounter from "../ViewCounter"

const Item = ({ title, slug, excerpt, date, cover, category }: any) => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  return (
    <Card>
      <CardActionArea>
        <Link href={category + '/' + slug}>
          {loading ? (
            <Skeleton variant="rect" height={216} />
          ) : (
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
          )}
        </Link>
        <CardContent>
          <Link href={category + '/' + slug}>
            <PostTitle theme={theme}>
              <Typography gutterBottom variant="h5" component="h2">
                {loading ? <Skeleton /> : title}
              </Typography>
            </PostTitle>
          </Link>
          <Typography variant="body2" color="textSecondary" component="p">
            {loading ? <Skeleton width="80%" /> : excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <PostInfo>
        {loading ? (
          <Skeleton width="50%" />
        ) : (
          <>
            <Typography variant="caption" color="textSecondary">
              <PostTVR>
                <QueryBuilderRounded fontSize="inherit" />
                {` ${date}`}
              </PostTVR>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {/* <ViewCounter id={slug} /> */}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              <PostTVR>
                <WhatshotRounded fontSize="inherit" />
                {/* {` ${timeToRead} phút đọc`} */}
              </PostTVR>
            </Typography>
          </>
        )}
      </PostInfo>
    </Card>
  );
};

export default Item;
