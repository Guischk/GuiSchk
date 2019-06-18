import styled from 'styled-components';
import { space, color, typography, layout, flexbox } from 'styled-system';
import themeGet from '@styled-system/theme-get';

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-content: space-between;

  position: relative;

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    position: fixed;
    left: 0;
    top: 0;
  }

  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

HeaderWrapper.defaultProps = {
  width: [1, 1, 1, 1 / 3],
  py: [5, 5, 6, 7],
  px: [6, 7, 7, 5],
  backgroundColor: 'dark',
};
