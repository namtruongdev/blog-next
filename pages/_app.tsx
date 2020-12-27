import type { AppProps } from 'next/app';

import 'react-typed/dist/animatedCursor.css';

import ThemeContextProvider from '../context/ThemeContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />;
    </ThemeContextProvider>
  );
};

export default App;
