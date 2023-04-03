import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SEO from '../components/Seo';
import Team from '../components/_txt/Team';
import Writers from '../components/_txt/Writers';
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

const Txt = ({ location: { pathname } }) => {
  //
  return (
    <>
      <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO title="The TXT Team" description="About The Xpress Train" />
        <TopPadding />
        <Team />
        <Writers />
      </Article>
    </>
  );
};

export default Txt;

Txt.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
