import React, { useState, useEffect, useContext } from 'react';

import { PostTitle, PostInfo, PostTVR, Thumb } from './styles';
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

const Item = ({ data }) => {
  const { title, thumbnail, excerpt, permalink, date, timeToRead } = data;
  const NodeListImages = useImage();

  const theme = useContext(ThemeContext);
  const [fluid, setFluid] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const fluid = NodeListImages.filter((image) => {
      const assets = image.node.childCloudinaryAsset;
      let imageName;
      if (assets !== null) {
        let imageNameSplit = assets.fluid.src.split('/');
        imageName = imageNameSplit[imageNameSplit.length - 1];
      }
      return assets !== null && imageName === thumbnail;
    });

    setFluid(fluid);
  }, [NodeListImages, thumbnail]);

  return (
    <Card>
      <CardActionArea>
        <Link href={`/${permalink}`}>
          {loading ? (
            <Skeleton variant="rect" height={216} />
          ) : (
            <>
              <Thumb
                src="#"
                width={299}
                height={299}
                layout="responsive"
                draggable={false}
                alt={title}
              />
            </>
          )}
        </Link>
        <CardContent>
          <Link href={`/${permalink}`}>
            <PostTitle>
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
              <ViewCounter id={permalink} />
            </Typography>
            <Typography variant="caption" color="textSecondary">
              <PostTVR>
                <WhatshotRounded fontSize="inherit" />
                {` ${timeToRead} phút đọc`}
              </PostTVR>
            </Typography>
          </>
        )}
      </PostInfo>
    </Card>
  );
};

export default Item;
