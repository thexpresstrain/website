import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SEO from '../components/Seo';
import Map from '../components/Sitemap';
import { TopPadding } from '../components/utility';

const pageTransition = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Article = styled(motion.article)``;

const Sitemap = ({ location: { pathname } }) => (
  <>
    <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
      <SEO title="Site Map" description="Complete collection of links to The Xpress Train site." />
      <TopPadding />
      <Map />
    </Article>
  </>
);

export default Sitemap;

Sitemap.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
