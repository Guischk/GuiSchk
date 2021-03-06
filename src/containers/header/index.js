import React from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper, IdWrapper } from './header.style';

import { H1, Pa, Box } from '../../components/basics';
import Footer from '../footer';
import CvImage from './cvImage';

const Header = ({ titleStyle, pStyle }) => {
  return (
    <HeaderWrapper>
      <IdWrapper>
        <CvImage />
        <H1 {...titleStyle}>Guillaume Schonrock</H1>
        <Pa {...pStyle}>Analyst Developer</Pa>
      </IdWrapper>
      <Footer header />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  titleStyle: PropTypes.shape({}),
  pStyle: PropTypes.shape({}),
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
