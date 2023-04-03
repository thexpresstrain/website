import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SEO from '../components/Seo';
import Pricing from '../components/_coworking/Pricing';
import { TopPadding } from '../components/utility';

const pageTransition = {
  initial: {},
  enter: {},
  exit: {},
};

const Article = styled(motion.article)``;

const Services = ({ location: { pathname } }) => (
  <>
    <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
      <SEO title="Co-Working Space" description="The TXT Hub is a fully-featured work hub." />
      <TopPadding />
      <Pricing />
    </Article>
  </>
);

export default Services;

Services.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
