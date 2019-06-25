import React from 'react';
import PropTypes from 'prop-types';

import { FooterWrapper } from './footer.style';
import SocialLinks from './socialLinks';

const Footer = props => {
  return (
    <FooterWrapper>
      <SocialLinks />
    </FooterWrapper>
  );
};

Footer.propTypes = {};

export default Footer;
