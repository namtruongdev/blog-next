import Link from 'next/link';
import React, { ReactElement } from 'react';

import {
  Menu,
  DialogStyled,
  MenuNavigation,
  FooterCopyrightAuthor,
  HeartIcon,
  CloseIcon,
  Close,
} from './styles';

import { SlideProps } from '@material-ui/core/Slide';
import { Slide, Typography } from '@material-ui/core';
import { MenuRounded } from '@material-ui/icons';

import { Theme } from '../../../types';

type Props = {
  theme: Theme;
};

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export const FullScreenDialog = (): ReactElement => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = (): void => {
    if (typeof window !== `undefined`) {
      const main = document.querySelector<HTMLElement>('#main');
      const html = document.querySelector<HTMLElement>('html');
      html!.style.overflowY = 'hidden';
      main!.classList.add('blur');
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (typeof window !== `undefined`) {
      const main = document.querySelector('#main');
      const html = document.querySelector('html');
      main!.classList.remove('blur');
      html!.style.overflowY = 'auto';
    }
  };

  return (
    <div>
      <Menu
        size="medium"
        color="secondary"
        aria-label="Menu"
        id="menu"
        onClick={handleClickOpen}
      >
        <MenuRounded />
      </Menu>
      <DialogStyled
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <MenuNavigation>
          <Close size="small" aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </Close>
          <ul>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="/categories">Danh mục</Link>
            </li>
            <li>
              <Link href="/archives">Lưu trữ</Link>
            </li>
            <li>
              <Link href="/tags">Thẻ</Link>
            </li>
            <li>
              <a
                href="https://duongnamtruong.com"
                target="_blank"
                rel="noreferrer"
              >
                Tác giả
              </a>
            </li>
          </ul>
        </MenuNavigation>
        <div className="menu-copyright">
          <Typography color="textPrimary">
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
          </Typography>
        </div>
      </DialogStyled>
    </div>
  );
};

export default FullScreenDialog;
