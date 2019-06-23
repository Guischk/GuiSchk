import styled from 'styled-components';
import { space, color, layout, flexbox } from 'styled-system';

const FooterWrapper = styled.div`

  display: flex;
  flex-direction: column;

  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

FooterWrapper.defaultProps = {
  bg: ['dark', 'dark', 'dark', 'transparent'],
};

export default FooterWrapper;
