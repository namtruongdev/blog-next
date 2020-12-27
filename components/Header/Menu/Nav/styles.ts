import styled from 'styled-components';

import Container from '@material-ui/core/Container';

// Navigation
export const NavContainer = styled(Container)`
  height: 60px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;
export const NavFlex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const NavLi = styled.li`
  display: inline-block;
  list-style: none;
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
  font-size: 1.125rem;
  padding: 0.3125rem 0rem;
  margin: 0 25px;
  &:hover,
  &:focus,
  &:active {
    color: rgba(255, 255, 255, 0.5);
    transition: all ease-in-out 0.3s;
  }
`;

// Hero

// export const HeroVideo = styled.span`
//   background-image: url(https://res.cloudinary.com/alerthumg/image/upload/v1596350402/laptrinhbanthan/images/poster_gsrl5q.jpg);
//   background-size: cover;
//   z-index: -1;
//   object-fit: cover;
//   width: 100%;
//   height: 90vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   pointer-events: none;
// `

// Hero scroll
