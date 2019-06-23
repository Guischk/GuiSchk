import styled from 'styled-components';
import { space, color, layout, flexbox } from 'styled-system';
import themeGet from '@styled-system/theme-get';

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-content: space-between;

  position: relative;

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100vh;
  }

  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

HeaderWrapper.defaultProps = {
  width: [1, 1, 1, 1 / 3],
  py: [6, 6, 6, 7],
  pr: [5, 6, 7, 6],
  pl: [5, 6, 7, 5],
  bg: 'dark',
  color: 'light',
};
