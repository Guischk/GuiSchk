import styled from 'styled-components';
import { space, color, layout, flexbox } from 'styled-system';
import themeGet from '@styled-system/theme-get';

import { Flex } from '../../components/basics';

export const FooterWrapper = styled.div`

  position: relative;
  flex-direction: column;

  display: ${props => (props.footer ? 'flex' : 'none')};

  @media only screen and (min-width: ${themeGet('breakpoints.2')}) {
    display: ${props => (props.header ? 'flex' : 'none')}
  } 

  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

FooterWrapper.defaultProps = {
  bg: ['dark', 'dark', 'dark', 'transparent'],
  py: [6, 6, 6, 0],
  px: [5, 5, 5, 0],
};

export const SocialWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-around;
`;

SocialWrapper.defaultProps = {
  width: 1 / 2,
  ml: 'auto',
};
