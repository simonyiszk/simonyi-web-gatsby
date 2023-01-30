// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark'
};

const theme = {
  fonts: {
    // https://www.figma.com/file/JOHGaqs67K52ZSj32xF8Bd/Weboldal?node-id=12%3A1076
    heading: 'Archivo, sans-serif',
    body: 'Space Grotesk, sans-serif',
    mono: 'Menlo, monospace'
  },
  colors: {
    // https://www.figma.com/file/JOHGaqs67K52ZSj32xF8Bd/Weboldal?node-id=12%3A1075
    simonyi_zold: '#63BC47',
    dark: '#231F20',
    darkmode_regular: '#333333',
    light: '#F8F8F8',
    white: '#FFFFFF',
    simonyi_zold_halvany: '#63BC47',
    simonyi_sarga: '#FFFF3C'
  },
  styles: {
    global: () => ({
      body: {
        bg: 'dark'
      },
      h1: {
        fontFamily: 'heading',
        fontSize: '32px',
        fontWeight: 'semibold',
        lineHeight: 'normal',
        letterSpacing: '0'
      },
      h2: {
        fontFamily: 'heading',
        fontSize: '24px',
        fontWeight: 'semibold',
        lineHeight: 'normal',
        letterSpacing: '0'
      },
      h3: {
        fontFamily: 'heading',
        fontSize: '20px',
        fontWeight: 'semibold',
        lineHeight: 'normal',
        letterSpacing: '0'
      },
      h4: {
        fontFamily: 'heading',
        fontSize: '16px',
        fontWeight: 'semibold',
        lineHeight: 'normal',
        letterSpacing: '0'
      }
    }),
    ...config
  }
};

export default extendTheme(theme);
export const baseTheme = {};
