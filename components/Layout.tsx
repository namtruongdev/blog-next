import React, { ReactNode, ReactElement } from 'react';
import dynamic from 'next/dynamic';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useDarkMode } from '../hooks';
import ThemeContextProvider from '../context/ThemeContext';

const Footer = dynamic(() => import('./Footer'));
const BackTop = dynamic(() => import('./Button/MenuButtom'));

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
  const [theme, toggleTheme, componentMounted] = useDarkMode();
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
      <ThemeContextProvider>{children}</ThemeContextProvider>
      <Footer theme={theme}></Footer>
      <BackTop theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default Layout;
