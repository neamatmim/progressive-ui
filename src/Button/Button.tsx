import React, { MouseEvent, FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  color,
  borderRadius,
  buttonStyle,
  space,
  fontSize,
  variant,
} from 'styled-system';
const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});
type Props = {
  onClick(e: MouseEvent<HTMLElement>): void;
  color?: string;
};
const Button: FunctionComponent<Props> = ({
  onClick: handleClick,
  children,
  ...props
}) => (
  <StyledButton {...props} onClick={handleClick}>
    {children}
  </StyledButton>
);
const StyledButton = styled('button')(
  {
    appearance: 'button',
    border: 0,
    outline: 0,
  },
  color,
  borderRadius,
  buttonStyle,
  buttonSize,
  space,
  fontSize
);

export default Button;
