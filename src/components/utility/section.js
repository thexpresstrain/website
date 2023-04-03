/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ color, children }) => {
  return <section style={{ background: color, position: 'relative' }}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Section.defaultProps = {
  color: '',
};
