import styled from 'styled-components';
import { Container, IconButton } from '@material-ui/core';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

export const FooterWrap = styled.footer`
  margin-top: 100px;
  margin-bottom: 60px;
`;

export const FooterLine = styled(Container)`
  margin-bottom: 20px;
`;
export const FooterSocial = styled(Container)`
  text-align: center;
`;
export const FooterFb = styled(IconButton)`
  color: #3b5998;
`;
export const FooterTele = styled(IconButton)`
  color: #0088cc;
`;

export const FooterGithub = styled(IconButton)`
  color: ${(props) =>
    props.theme === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#333'};
  transition: all 0.3s ease-in-out;
`;

export const FooterYandex = styled(IconButton)`
  color: #ffcc00;
`;
export const FooterCopyright = styled(Container)`
  text-align: center;
`;

export const FooterCopyrightAuthor = styled.a`
  text-decoration: none;
  color: #eb6383;
  &:hover {
    color: #fa9191;
    transition: ease-in all 0.3s;
  }
`;

export const HeartIcon = styled(FavoriteRoundedIcon)`
  fill: red;
  vertical-align: middle;
`;
