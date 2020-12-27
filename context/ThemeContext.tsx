import React, { createContext, ReactNode, ReactElement } from 'react';

import { useDarkMode } from '../hooks';
import { Theme } from '../types';

type Props = {
  children: ReactNode;
};

type CreateContext = {
  theme: Theme;
  toggleTheme: Function;
  componentMounted: boolean;
};

const ThemeContextProvider = ({ children }: Props): ReactElement => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, componentMounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext<CreateContext>({
  theme: 'light',
  toggleTheme: () => null,
  componentMounted: false,
});

export default ThemeContextProvider;
