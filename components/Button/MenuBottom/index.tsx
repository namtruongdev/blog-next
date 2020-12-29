import React, { ReactElement, useState, useEffect, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import smoothscroll from 'smoothscroll-polyfill';
import { useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import { Add, ExpandLessRounded } from '@material-ui/icons';

import { Theme } from '../../../types';

type ScrollTriggerProps = {
  children: ReactNode;
};

type Props = {
  theme: Theme;
  toggleTheme: Function;
};
const FullScreenDialog = dynamic(
  () => import('../../Dialogs/FullScreenDialog')
);
const DarkMode = dynamic(() => import('../DarkMode'));

if (typeof window !== `undefined`) {
  smoothscroll.polyfill();
}

const Options = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 100;
`;
const ToTop = styled(Fab)`
  position: fixed;
  right: 15px;
  bottom: 15px;
  visibility: hidden;
  z-index: 99;
  transition: transform 0.45s ease-in-out;
`;

const ScrollTrigger = ({ children }: ScrollTriggerProps): ReactElement => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    if (!trigger) {
      const iconX = document.querySelector<HTMLButtonElement>('.menu button');
      const iconMenu = document.querySelector<HTMLButtonElement>('#menu');
      const iconToTop = document.querySelector<HTMLButtonElement>('#to-top');
      const iconSwitchMode = document.querySelector<HTMLButtonElement>(
        '#switch-mode'
      );

      if (iconX && iconMenu && iconSwitchMode && iconToTop) {
        iconX.classList.add('reseted');
        iconX.style.transform = 'rotate(0deg)';
        iconMenu.style.transform = 'translateY(0px)';
        iconMenu.style.transform = 'scale(0.1)';
        iconToTop.style.transform = 'translateY(0px)';
        iconToTop.style.transform = 'scale(0.1)';
        iconSwitchMode.style.transform = 'translateY(0px)';
        iconSwitchMode.style.transform = 'scale(0.1)';
        setTimeout(() => {
          iconMenu.style.visibility = 'hidden';
          iconToTop.style.visibility = 'hidden';
          iconSwitchMode.style.visibility = 'hidden';
        }, 200);
      }
    }
  }, [trigger]);

  return (
    <Zoom in={trigger}>
      <Options role="presentation" className="menu">
        {children}
      </Options>
    </Zoom>
  );
};

const MenuBottom = (props: Props): ReactElement => {
  const { theme, toggleTheme } = props;
  const [isClicked, setStatus] = useState<boolean>(false);

  const handleOptionsClick = (): void => {
    if (typeof window !== `undefined`) {
      const iconX = document.querySelector<HTMLElement>('.menu button');
      const iconMenu = document.querySelector<HTMLElement>('#menu');
      const iconToTop = document.querySelector<HTMLElement>('#to-top');
      const iconSwitchMode = document.querySelector<HTMLElement>(
        '#switch-mode'
      );
      if (iconX && iconMenu && iconToTop && iconSwitchMode) {
        if (!isClicked) {
          iconX.style.transition = 'transform 0.3s ease-in-out';
          iconX.style.transform = 'rotate(45deg)';
          iconMenu.style.visibility = 'visible';
          iconMenu.style.transform = 'translateY(-60px)';
          iconToTop.style.visibility = 'visible';
          iconToTop.style.transform = 'translateY(-120px)';
          iconSwitchMode.style.visibility = 'visible';
          iconSwitchMode.style.transform = 'translateY(-180px)';
          setStatus(true);
        } else if (isClicked && iconX.classList.contains('reseted')) {
          iconX.style.transition = 'transform 0.3s ease-in-out';
          iconX.style.transform = 'rotate(45deg)';
          iconMenu.style.visibility = 'visible';
          iconMenu.style.transform = 'translateY(-60px)';
          iconToTop.style.visibility = 'visible';
          iconToTop.style.transform = 'translateY(-120px)';
          iconSwitchMode.style.visibility = 'visible';
          iconSwitchMode.style.transform = 'translateY(-180px)';
          iconX.classList.remove('reseted');
        } else {
          iconX.style.transform = 'rotate(0deg)';
          iconMenu.style.transform = 'translateY(0px)';
          iconMenu.style.transform = 'scale(0.1)';
          iconToTop.style.transform = 'translateY(0px)';
          iconToTop.style.transform = 'scale(0.1)';
          iconSwitchMode.style.transform = 'translateY(0px)';
          iconSwitchMode.style.transform = 'scale(0.1)';
          setTimeout(() => {
            iconMenu.style.visibility = 'hidden';
            iconToTop.style.visibility = 'hidden';
            iconSwitchMode.style.visibility = 'hidden';
          }, 200);
          setStatus(false);
        }
      }
    }
  };

  const handleToTopClick = (): void => {
    if (typeof window !== undefined) {
      const anchor = document.querySelector<HTMLElement>('#navigation');
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <ScrollTrigger {...props}>
        <Fab
          size="medium"
          color="secondary"
          aria-label="Options"
          onClick={handleOptionsClick}
        >
          <Add />
        </Fab>
      </ScrollTrigger>
      <FullScreenDialog theme={theme} />
      <ToTop
        size="medium"
        color="secondary"
        aria-label="To top"
        onClick={handleToTopClick}
        id="to-top"
      >
        <ExpandLessRounded />
      </ToTop>
      <DarkMode theme={theme} toggleTheme={() => toggleTheme()} />
    </>
  );
};

export default MenuBottom;
