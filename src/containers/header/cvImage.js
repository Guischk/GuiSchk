import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Box, FillImg } from '../../components/basics';

const CvImage = ({ divStyle, picStyle }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Box {...divStyle}>
      <FillImg {...picStyle} fluid={data.file.childImageSharp.fluid} />
    </Box>
  );
};

CvImage.propTypes = {
  divStyle: PropTypes.shape({}),
  picStyle: PropTypes.shape({}),
};

CvImage.defaultProps = {
  divStyle: {
    width: 1 / 2,
    ml: 'auto',
    mr: ['auto', 'auto', 'auto', 0],
  },
  picStyle: {
    borderRadius: 170888,
  },
};

export default CvImage;
