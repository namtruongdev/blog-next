import Image from 'next/image';

import styled from 'styled-components';

import { CardActions, Typography } from '@material-ui/core';

export const PostTitle = styled.a`
  text-decoration: none;
  color: ${(props) =>
    props.theme === 'dark'
      ? 'rgba(255, 255, 255, 0.87)'
      : 'rgba(0, 0, 0, 0.87)'};
  &:hover,
  :active {
    color: #eb6383;
    transition: all ease-in-out 0.3s;
  }
`;

export const PostInfo = styled(CardActions)`
  padding: 8px 16px;
`;

export const PostTVR = styled.span`
  user-select: none;
  svg {
    vertical-align: -5%;
  }
`;

export const ThumbNail = styled(({ ...props }) => <Image {...props} />)`
  max-height: 216px;
`;

export const Excerpt = styled(({ ...props }) => <Typography {...props} />)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
