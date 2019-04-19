// my-theme.ts
import { DefaultTheme } from 'styled-components';
const baseTheme = {
  space: [0, 2, 4, 8, 16, 32],
  fontSizes: [14, 16, 18, 24, 32],
  colors: {
    blue: '#07c',
    tomato: 'tomato',
    purple: 'purple',
  },
};
const myTheme: DefaultTheme = {
  ...baseTheme,
  breakpoints: [32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  borderWidths: [],
  borderStyles: [],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  minWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: '#000',
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    gray: ' #777',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    white: '#fff',
    transparent: 'transparent',
    blacks: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)',
    ],
    whites: [
      'rgba(255,255,255,.0125)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.9)',
    ],
    shadows: [],
    zIndices: [],
    // Variant Styles
    textStyles: {
      caps: {
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
      },
    },
    colorStyles: {
      warning: {
        color: 'black',
        backgroundColor: 'orange',
      },
      error: {
        color: 'white',
        backgroundColor: 'red',
      },
    },
    buttons: {
      primary: {
        color: 'white',
        backgroundColor: baseTheme.colors.blue,
        '&:hover': {
          backgroundColor: 'black',
        },
      },
      secondary: {
        color: 'white',
        backgroundColor: baseTheme.colors.blue,
        '&:hover': {
          backgroundColor: 'black',
        },
      },
      cancel: {
        color: 'white',
        backgroundColor: baseTheme.colors.purple,
      },
      danger: {
        color: 'white',
        backgroundColor: baseTheme.colors.tomato,
      },
    },
    buttonSizes: {
      small: {
        fontSize: baseTheme.fontSizes[2],
        padding: `8px 16px`,
      },
      medium: {
        fontSize: baseTheme.fontSizes[2],
        padding: `8px 16px`,
      },
      large: {
        fontSize: baseTheme.fontSizes[4],
        padding: `16px 32px`,
      },
    },
  },
};

export { myTheme };
