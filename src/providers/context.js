import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const Context = ({ children }) => {
  const [state, setState] = useState('');

  return <AppContext.Provider value={{ state, setState }}>{children}</AppContext.Provider>;
};

export default Context;

Context.propTypes = {
  children: PropTypes.node.isRequired,
};
