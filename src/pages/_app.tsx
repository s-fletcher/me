import '@fontsource/cabin';
import '@fontsource/martel/800.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { theme } from '../data/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
