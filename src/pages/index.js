import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SEO from '../components/Seo';
import Hero from '../components/_homepage/Hero';
import Benefits from '../components/_homepage/Benefits';
import VentureBuilder from '../components/_homepage/Venturebuilder';
import Koto from '../components/_homepage/Koto';
import Newsletter from '../components/_homepage/Newsletter';
import BlogPosts from '../components/_homepage/FeaturedPost';
import Vision from '../components/_homepage/Vision';
import Mission from '../components/_homepage/Mission';
import { TopPadding } from '../components/utility';

const pageTransition = {
  initial: {},
  enter: {},
  exit: {},
};

const Article = styled(motion.article)``;

const Home = ({ location: { pathname } }) => {
  return (
    <>
      <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO
          title="Build, Launch & Grow"
          description="The Xpress Train helps individuals or entrepreneurs to build, launch and grow their products or idea."
        />
        <TopPadding />
        <Hero />
        <Benefits />
        <VentureBuilder />
        <Koto />
        <Newsletter />
        <BlogPosts />
        <Vision />
        <Mission />
      </Article>
    </>
  );
};

export default Home;

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
