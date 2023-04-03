/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';
// import Amplify from 'aws-amplify';
import Context from './context';
import awsconfig from '../aws-exports';

// Amplify.configure(awsconfig);

const wrapRootElement = ({ element }) => {
  return (
    <>
      <Context>{element}</Context>
    </>
  );
};

export { wrapRootElement };

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
