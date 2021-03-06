import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  colors: {
    orange: {
      50: '#FBF8F5',
      100: '#BEBAB6',
      500: '#F4A261',
      700: '#E76F51',
    },
    teal: {
      400: '#A8DADC',
      600: '#457B9D',
      800: '#343E4F',
    },
    blue: {
      400: '#1B82FF',
      500: '#005EFF',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('orange.50', 'black')(props),
        color: mode('teal.800', 'white')(props),
      },
      '#__next': {
        overflowX: 'hidden',
        position: 'relative',
      },
    }),
  },
  components: {
    Link: {
      baseStyle: {
        color: 'blue.500',
        borderRadius: 4,
      },
    },
  },
  fonts: {
    heading: 'Martel',
    body: 'Cabin',
  },
  shadows: {
    card: '0 4px 14px rgba(0,0,0,0.075)',
  },
});
