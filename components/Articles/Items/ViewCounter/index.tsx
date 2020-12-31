import React, { memo, useEffect } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import styled from 'styled-components';

import useSWR from 'swr';

const PostViews = styled.span`
  user-select: none;
  svg {
    vertical-align: -5%;
  }
`;

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);

  return res.json();
};

const ViewCounter = ({ slug }: { slug: string }) => {
  console.log(slug);

  // const { data } = useSWR(`/api/views/${slug}`, fetcher);

  const views = data?.total;

  // useEffect(() => {
  //   const registerView = () =>
  //     fetch(`/api/views/${slug}`, {
  //       method: 'POST',
  //     });
  //   registerView();
  // }, [slug]);

  return (
    <PostViews>
      {/* <VisibilityIcon fontSize="inherit" /> {views} lượt xem */}
    </PostViews>
  );
};

export default memo(ViewCounter);
