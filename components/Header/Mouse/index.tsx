import React, { ReactElement, useContext } from 'react';

import { ThemeContext } from '../../../context/ThemeContext';

import { HeroContainer, IconMouse, ButtonScroll } from './styles';

const handleClick = (): void => {
  if (typeof window !== 'undefined') {
    const anchor = document.querySelector<HTMLElement>('#main');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

const Mouse = (): ReactElement => {
  const theme = useContext(ThemeContext);

  return (
    <HeroContainer theme={theme}>
      <ButtonScroll onClick={handleClick}>
        <IconMouse theme={theme} />
      </ButtonScroll>
    </HeroContainer>
  );
};

export default Mouse;
