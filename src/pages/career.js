import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SEO from '../components/Seo';
import { TopPadding } from '../components/utility';
import Jobs from '../components/_career/JobPosting';

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

const Career = ({ location: { pathname } }) => (
  <>
    <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
      <SEO title="Career" description="Come join us for a fulfiling career" />
      <TopPadding />
      <Jobs />
    </Article>
  </>
);

export default Career;

Career.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
