import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import SeoSchema from './SeoSchema';

const SEO = ({ title, description, meta, image, lang, isBlogPost, author, datePublished, dateModified }) => {
  //
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteName
            siteDescription
            author
            siteUrl
            remoteAssetLogo
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.siteDescription;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.siteName}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: isBlogPost ? `article` : `website`,
          },
          {
            property: 'og:image:alt',
            content: image,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            property: 'twitter:image:alt',
            content: image,
          },
        ].concat(meta)}
      />
      <SeoSchema
        name={site.siteMetadata.siteName}
        url={site.siteMetadata.siteUrl}
        title={title}
        image={image}
        description={metaDescription}
        isBlogPost={isBlogPost}
        author={author}
        datePublished={datePublished}
        dateModified={dateModified}
        logo={site.siteMetadata.remoteAssetLogo}
      />
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  isBlogPost: PropTypes.bool,
  author: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  image: ``,
  isBlogPost: false,
  author: ``,
  datePublished: ``,
  dateModified: ``,
  meta: [],
};
