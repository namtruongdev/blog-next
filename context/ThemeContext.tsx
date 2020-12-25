import React, { createContext, ReactNode } from 'react';

import { useDarkMode } from '../hooks';
import { Theme } from '../types';

type Props = {
  children: ReactNode;
};

const ThemeContextProvider = ({ children }: Props) => {
  const [theme] = useDarkMode();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const ThemeContext = createContext<Theme>('light');

export default ThemeContextProvider;
