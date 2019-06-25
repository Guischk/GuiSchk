import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { themeGet } from '@styled-system/theme-get';

import { SocialWrapper } from './footer.style';
import theme from '../../theme';

const SocialLinks = props => {
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
    <SocialWrapper>
      {site.siteMetadata.socials.map(social => {
        console.log(social);
        return (
          <a href={social.link}>
            <img
              alt={social.title}
              src={`${social.icon}/${theme.colors.light.slice(1)}/${
                theme.fontSizes[5]
              }`}
            />
          </a>
        );
      })}
    </SocialWrapper>
  );
};

export default SocialLinks;
