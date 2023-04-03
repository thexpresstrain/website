/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const SchemaOrg = ({ name, url, title, description, isBlogPost, image, author, datePublished, dateModified, logo }) => {
  //
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name,
      url,
    },
    {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
    },
  ];

  const blogSchema = isBlogPost
    ? [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url,
        name: title,
        alternateName: title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
        author: {
          '@type': 'Person',
          name: author,
        },
        publisher: {
          '@type': 'Organization',
          url,
          logo,
          name: author,
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': url,
        },
        datePublished,
        dateModified,
      },
    ]
    : [];

  const schema = [...baseSchema, ...blogSchema];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
};

export default SchemaOrg;

SchemaOrg.propTypes = {
  isBlogPost: PropTypes.bool,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

SchemaOrg.defaultProps = {
  isBlogPost: false,
  image: '',
};
