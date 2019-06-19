import React from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './header.style';

import { H1, Pa, Box } from '../../components/basics';
import CvImage from './cvImage';

const Header = ({ titleStyle, pStyle }) => {
  return (
    <HeaderWrapper>
      <Box>
        <CvImage />
        <H1 {...titleStyle}>Guillaume Schonrock</H1>
        <Pa {...pStyle}>Analyst Developer</Pa>
      </Box>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  titleStyle: PropTypes.shape({}),
};

Header.defaultProps = {
  titleStyle: {
    color: 'light',
    textAlign: ['center', 'center', 'center', 'right'],
  },
  pStyle: {
    color: 'light',
    textAlign: ['center', 'center', 'center', 'right'],
  },
};

export default Header;
