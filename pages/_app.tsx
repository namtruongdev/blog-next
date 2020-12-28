import { useEffect, useMemo, useCallback } from 'react';
import type { AppProps } from 'next/app';

import 'react-typed/dist/animatedCursor.css';
import '../styles/global.scss';

import ThemeContextProvider from '../context/ThemeContext';

const App = ({ Component, pageProps }: AppProps) => {
  console.log(
    '%c Xin đừng HACK web em! ^.^ %c',
    'font-family: "Opens San", Helvetica, Arial, sans-serif;font-size:28px;color:red;-webkit-text-fill-color:red;-webkit-text-stroke: 1px red;',
    'font-size:12px;color:#999999;'
  );
  const colors = useMemo(
    () => [
      '#FF6F61',
      '#6B5B95',
      '#88B04B',
      '#F7CAC9',
      '#92A8D1',
      '#955251',
      '#B565A7',
      '#009B77',
      '#DD4124',
      '#D65076',
      '#45B8AC',
      '#EFC050',
      '#5B5EA6',
      '#9B2335',
      '#DFCFBE',
      '#55B4B0',
      '#E15D44',
      '#7FCDCD',
      '#BC243C',
      '#C3447A',
      '#98B4D4',
      '#FF0000',
    ],
    []
  );
  const createRandom = useCallback(
    (arr: string[]) => arr[Math.floor(Math.random() * arr.length)],
    []
  );
  useEffect(() => {
    const body = document.querySelector<HTMLBodyElement>('body');
    body!.addEventListener('click', (e) => {
      const heart = document.createElement('div');
      const span = document.createElement('span');
      const spanClass = document.createAttribute('class');
      spanClass.value = 'heart';

      span.setAttributeNode(spanClass);
      heart.appendChild(span);

      heart.style.fontSize = '10px';
      heart.style.position = 'fixed';
      heart.style.left = `${e.x}px`;
      heart.style.top = `${e.y}px`;
      span.style.backgroundColor = createRandom(colors);

      heart.classList.add('bay-len-nao');

      body!.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1400);
    });
  }, []);
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />;
    </ThemeContextProvider>
  );
};

export default App;
