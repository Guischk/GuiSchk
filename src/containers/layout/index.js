import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/globalStyle';
import NormalizeCss from '../../theme/normalizeCss';

import theme from '../../theme';

const Layout = ({ children }) => {
  return (
    <>
      <NormalizeCss />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
