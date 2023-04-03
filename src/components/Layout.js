import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/global.css';

const Layout = ({ children, path }) => {
  return (
    <>
      <Navbar path={path} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  //
};
