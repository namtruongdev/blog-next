import React, { memo, ReactElement } from 'react';
import {
  FooterWrap,
  FooterLine,
  FooterSocial,
  FooterFb,
  FooterTele,
  FooterGithub,
  FooterYandex,
  FooterCopyright,
  FooterCopyrightAuthor,
  HeartIcon,
} from './styles';

import { Divider } from '@material-ui/core';
import { Theme } from '../../types';

import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

type FooterProps = {
  theme: Theme;
};

const Footer = ({ theme }: FooterProps): ReactElement => {
  return (
    <FooterWrap id="footer">
      <FooterLine maxWidth="sm">
        <Divider variant="middle" />
      </FooterLine>
      <FooterSocial maxWidth="lg">
        <a
          href="https://www.facebook.com/truongduongg99/"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <FooterFb aria-label="facebook">
            <FacebookIcon />
          </FooterFb>
        </a>
        <a
          href="https://t.me/truongduong99"
          target="_blank"
          rel="noreferrer"
          title="Telegram"
        >
          <FooterTele aria-label="telegram">
            <TelegramIcon />
          </FooterTele>
        </a>
        <a
          href="https://github.com/namtruongdev"
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          <FooterGithub theme={theme}>
            <GitHubIcon />
          </FooterGithub>
        </a>
        <a
          href="mailto:hi@duongnamtruong.com"
          target="_blank"
          rel="noreferrer"
          title="Email"
        >
          <FooterYandex aria-label="email">
            <MailOutlineRoundedIcon />
          </FooterYandex>
        </a>
      </FooterSocial>
      <FooterCopyright maxWidth="lg">
        <p>
          Bản quyền © {new Date().getFullYear()}. Được tạo nên từ{' '}
          <HeartIcon fontSize="inherit" /> của
          <FooterCopyrightAuthor
            href="https://www.facebook.com/truongduongg99/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Dương Nam Trường
          </FooterCopyrightAuthor>
        </p>
      </FooterCopyright>
    </FooterWrap>
  );
};

export default memo(Footer);
