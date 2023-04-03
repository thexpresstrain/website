/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const JsonLd = ({ schema }) => {
  //
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
};

export default JsonLd;

JsonLd.propTypes = {
  schema: PropTypes.array.isRequired,
};
