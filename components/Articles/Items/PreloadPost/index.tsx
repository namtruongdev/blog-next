import React from 'react';

import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';

import { PostTitle, PostInfo } from '../styles';

import Skeleton from '@material-ui/lab/Skeleton';

const PreloadPost = () => {
  return (
    <Card>
      <CardActionArea>
        <Skeleton variant="rect" height={216} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <PostTitle>
              <Skeleton />
            </PostTitle>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            <Skeleton width="80%" />
          </Typography>
        </CardContent>
      </CardActionArea>
      <PostInfo>
        <Skeleton width="50%" />
      </PostInfo>
    </Card>
  );
};

export default PreloadPost;
