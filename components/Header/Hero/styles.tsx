import styled from 'styled-components';

import { Typography } from '@material-ui/core';

export const HeroImage = styled.div`
  background-image: url('https://res.cloudinary.com/alerthumg/image/upload/v1596350402/laptrinhbanthan/images/poster_gsrl5q.jpg');
  background-size: cover;
  z-index: 40;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 100%;
`;
export const SiteName = styled(({ ...props }) => <Typography {...props} />)`
  color: rgba(255, 255, 255, 0.87);
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
  @media (min-width: 320px) and (max-width: 415px) {
    & {
      font-size: 1.7rem;
    }
  }
  @media (min-width: 1280px) {
    & {
      font-size: 3.75rem;
    }
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    h1 {
      font-size: 3.3333rem;
    }
  }
  @media (min-width: 600px) and (max-width: 959px) {
    h1 {
      font-size: 2.9167rem;
    }
  }
  @media (min-width: 415px) and (max-width: 599px) {
    & {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 319px) {
    & {
      font-size: 1.4rem;
    }
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 50;
`;
export const PreviewWave = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;

  @media (max-width: 768px) {
    & {
      height: 40px;
      min-height: 40px;
    }
  }
`;

export const PreviewParallax = styled.g`
  & > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  & > use:nth-of-type(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  & > use:nth-of-type(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  & > use:nth-of-type(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  & > use:nth-of-type(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;
