import React, { ReactElement, memo } from 'react';
import { SwitchModeIcon, Sunny, Moon } from './styles';
import { Theme } from '../../../types';

type Props = {
  theme: Theme;
  toggleTheme: () => Function;
};
const DarkMode = ({ theme, toggleTheme }: Props): ReactElement => {
  return (
    <SwitchModeIcon
      size="medium"
      color="secondary"
      aria-label="swicthMode"
      id="switch-mode"
      onClick={toggleTheme}
      theme={theme}
    >
      {theme === 'light' ? <Sunny /> : <Moon />}
    </SwitchModeIcon>
  );
};

export default memo(DarkMode);
