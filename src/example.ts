// theme is now fully typed
export const MyComponent = styled.div`
  color: ${props => props.theme.colors.main};
`;

// theme is also fully typed
export MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

// and this theme is fully typed as well
export cssHelper = css`
  border: 1px solid ${props => props.theme.borderRadius};
`;
// Using custom props?

import styled from 'styled-components';
import Header from './Header';

interface TitleProps {
  readonly isActive: boolean;
};

const Title = styled.h1<TitleProps>`
  color: ${props => props.isActive ? props.theme.colors.main : props.theme.colors.secondary};
`

const NewHeader = styled(Header)<{ customColor: string }>`
  color: ${props => props.customColor};
`


const colors = {
  text: '#000',
  background: '#fff',
  primary: '#00f',
  secondary: '#00a',
  gray: '#eee',
  lightgray: '#fafafa',
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0cf',
      secondary: '#f0e',
      gray: '#222',
      lightgray: '#111',
    },
    // other color modes...
  }
}