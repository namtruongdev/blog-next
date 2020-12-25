// useDarkMode.js
import { useEffect, useState } from 'react';

import { Theme } from '../types';

export const useDarkMode = (): [Theme, Function, boolean] => {
  const [theme, setTheme] = useState<Theme>('light');
  const [componentMounted, setComponentMounted] = useState<boolean>(false);

  const setMode = (mode: Theme): void => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme: Theme =
      window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
