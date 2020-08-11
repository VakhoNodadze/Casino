import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  fontFamily: {
    default: 'OpenSans-Regular, Roboto, sans-serif',
    bold: 'Mont-Bold, Roboto, sans-serif'
  },
  fontSize: {
    tiny: '11px',
    mini: '12px',
    small: '13px',
    default: '15px',
    big: '16px',
    extraBig: '18px',
    large: '20px',
    extraLarge: '#39B7FF',
    huge: '60px'
  },
  color: {
    white: '#fff',
    yellowLight: '#FFFF00',
    yellowDark: '#FFCA2A',
    yellow3: '#FFD919',
    yello4: '#FFE926',
    yello5: '#BDC63E',
    modalBG: '#352D4B',
    black: '#000',
    mainBlack: '#202126',
    blackLight: '#3B354A',
    purpleDark: '#3D2F60',
    black4: '#2C2D33',
    black5: '#35364A',
    red: '#FF00B2',
    grey: '#AFBBC4',
    grayDark: '#6D728E',
    grayLight: '#CAD0F1',
    gray2: '#98AAC2',
    gray3: '#D6D9D9',
    gray4: '#9AAACF',
    gray5: '#6E717E',
    green: '#6FF27B',
    greenBtn: '2DBFB5',
    blueLight: '#39B7FF',
    default: '764ED4',
    close: '#2F2847'
  },
  borderRadius: {
    tiny: '2px',
    small: '4px',
    default: '6px',
    big: '8px',
    circular: '100%',
    rounded: '100rem'
  },
  palette: {
    greenBtn: {
      200: '#2DBFB5',
      300: '#1A6F7D',
      1000: '#fff'
    },
    close: {
      200: '#2F2847',
      1000: '#fff'
    },
    default: {
      200: '#764ED4',
      1000: '#fff'
    }
  }
}
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
