// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
};

const breakpoints = {
  sm: '30em',
  msm: '40em',
  md: '51em',
  lg: '70em',
  xl: '80em',
  '2xl': '96em'
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
        fontSize: '2rem',
        fontWeight: 'semibold',
        lineHeight: 'normal',
        letterSpacing: '0'
      },
      h2: {
        fontFamily: 'heading',
        fontSize: '1.5rem',
        fontWeight: 'semibold',
        lineHeight: 'normal',
        letterSpacing: '0'
      },
      h3: {
        fontFamily: 'heading',
        fontSize: '1.25rem',
        fontWeight: 'semibold',
        lineHeight: 'normal',
        letterSpacing: '0'
      },
      h4: {
        fontFamily: 'heading',
        fontSize: '1rem',
        fontWeight: 'semibold',
        lineHeight: 'normal',
        letterSpacing: '0'
      }
    })
  },
  breakpoints,
  config
};

export default extendTheme(theme);
// build warning fixed by adding this line:
export const baseTheme = {};
