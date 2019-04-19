import styled from 'styled-components';
import {
  space,
  color,
  width,
  fontSize,
  flex,
  alignSelf,
  order,
} from 'styled-system';
import { themeGet } from 'styled-system';
export interface BoxProps {
  /**
   * Set this to change alert kind
   * @default info
   */
}
const Box = styled.div(
  (props: BoxProps) => ({
    borderRadius: themeGet('radii.small', '4px')(props),
    boxSizing: 'border-box',
    minWidth: 0,
  }),
  space,
  color,
  width,
  fontSize,
  flex,
  alignSelf,
  order
);
Box.defaultProps = {
  bg: 'red',
};
export default Box;
