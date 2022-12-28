// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'

// TODO: Add your own theme overrides here e.g.: fonts, colors, etc.
const theme = {
  colors: {
    primary: 'rebeccapurple',
  },
  fonts: {
    heading: 'Archivo, sans-serif',
    body: '"Space Grotesk", sans-serif'
  }
}

export default extendTheme(theme)
