import styled from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  border,
} from 'styled-system';
import Img from 'gatsby-image';
import themeGet from '@styled-system/theme-get';

export const Box = styled.div`
  ${space}
  ${layout}
  ${border}
`;

Box.defaultProps = {
  width: 1,
};

export const H1 = styled.h1`
  ${space}
  ${color}
  ${typography}
  ${flexbox}
`;

H1.defaultProps = {
  fontFamily: 'mono',
  fontSize: ['6vw', '6vw', '5vw', '3vw'],
  fontWeight: 3,
  color: 'dark',
};

export const Pa = styled.p`
  ${space}
  ${color}
  ${typography}
  ${flexbox}
`;

Pa.defaultProps = {
  fontFamily: 'sans',
  fontSize: ['5vw', '5vw', '4vw', '2vw'],
  color: 'dark',
};

export const FillImg = styled(Img)`
  height: 100%;

  ${space}
  ${layout}
  ${border}
`;
