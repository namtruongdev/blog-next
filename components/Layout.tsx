import React, { ReactNode, ReactElement, useContext } from 'react';
import dynamic from 'next/dynamic';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeContext } from '../context/ThemeContext';

const Footer = dynamic(() => import('./Footer'));
const MenuBottom = dynamic(() => import('./Button/MenuBottom'));

import { Theme } from '../types';

type Props = {
  children?: ReactNode;
};

type MuiTheme = {
  palette: {
    type: Theme;
    text: {
      primary: string;
    };
  };
};
const Layout = ({ children }: Props): ReactElement => {
  const { theme, toggleTheme, componentMounted } = useContext(ThemeContext);

  const textColor: string =
    theme === 'light' ? 'rgba(0,0,0,0.87)' : `rgba(255, 255, 255, 0.87)`;
  if (!componentMounted) {
    return <div />;
  }

  const themeUI: MuiTheme = createMuiTheme({
    palette: {
      type: theme,
      text: {
        primary: textColor,
      },
    },
  });

  return (
    <ThemeProvider theme={themeUI}>
      <CssBaseline />
      {children}
      <Footer theme={theme}></Footer>
      <MenuBottom theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default Layout;
