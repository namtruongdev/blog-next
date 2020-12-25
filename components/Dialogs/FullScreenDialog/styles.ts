import styled from 'styled-components';
import { Dialog, Slide, Fab, Typography } from '@material-ui/core';
import { MenuRounded, FavoriteRounded, CloseRounded } from '@material-ui/icons';

export const Menu = styled(Fab)`
  position: fixed;
  right: 15px;
  bottom: 15px;
  visibility: hidden;
  transition: transform 0.3s ease-in-out;
  z-index: 99;
`;

export const DialogStyled = styled(Dialog)`
  .MuiBackdrop-root {
    background: transparent;
  }
  .MuiDialog-paper {
    background: ${(props) =>
      props.theme === 'dark'
        ? 'rgba(0, 0, 0, 0.7)'
        : 'rgba(255, 255, 255, 0.7)'};
    justify-content: center;
    align-items: center;

    .menu-copyright {
      text-align: center;
      position: absolute;
      bottom: 15px;
      padding: 0 15px;
    }
  }
`;

export const MenuNavigation = styled.nav`
  ul {
    padding: 0;
    li {
      list-style: none;
      display: inline-block;

      @media (max-width: 700px) {
        & {
          display: block;
          text-align: center;
          margin: 15px 0;
        }
      }
      a {
        text-decoration: none;
        font-size: 1.5rem;
        letter-spacing: 0px;
        color: ${(props) =>
          props.theme === 'dark'
            ? ' rgba(255, 255, 255, 0.87)'
            : 'rgba(0, 0, 0, 0.87)'}
        padding: 1rem 1.5rem;
        &:hover {
          color: #eb6383;
          transition: 0.3s all ease-in-out;
        }
      }
    }
  }
`;

export const FooterCopyrightAuthor = styled.a`
  text-decoration: none;
  color: #eb6383;
  &:hover {
    color: #fa9191;
    transition: ease-in all 0.3s;
  }
`;

export const HeartIcon = styled(FavoriteRounded)`
  fill: red;
  vertical-align: middle;
`;

export const CloseIcon = styled(CloseRounded)`
  fill: #eb6383;
`;
export const Close = styled(Fab)`
  position: absolute;
  right: 30px;
  top: 30px;
  background: #fff;
  &:hover {
    background: #f2f2f2;
  }
`;
