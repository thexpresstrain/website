/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

const wrapPageElement = ({ element, props: { path } }) => {
  return (
    <>
      <Layout path={path}>
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
      </Layout>
    </>
  );
};

export { wrapPageElement };

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
