import React from 'react';
import PropTypes from 'prop-types';

import { useStaticQuery, graphql } from 'gatsby';
import { themeGet } from '@styled-system/theme-get';

import { FooterWrapper, SocialWrapper } from './footer.style';

const Footer = props => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            title
            icon
            link
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <SocialWrapper>
        {site.siteMetadata.socials.forEach(social => {
          return (
            <a href={social.link}>
              <img
                alt={social.title}
                src={`${social.icon}/${themeGet('colors.light')}/${themeGet(
                  'fontSizes.5',
                )}`}
              />
            </a>
          );
        })}
      </SocialWrapper>
    </FooterWrapper>
  );
};

Footer.propTypes = {};

export default Footer;
