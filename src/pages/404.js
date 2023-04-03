import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import SEO from '../components/Seo';
import { Section, Container, Block, TopPadding } from '../components/utility';
import Emoji from '../components/svg/EmojiCrying';

const pageTransition = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Article = styled(motion.article)`
  max-width: 800px;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  svg {
    width: 200px;
  }
  a {
    font-weight: 600;
    border-bottom: 1px tomato solid;
  }
`;

const NotFound = ({ location: { pathname } }) => (
  <>
    <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
      <SEO title="Primary keyword - Secondary keyword" description="Description for page" />
      <TopPadding />
      <Section>
        <Container>
          <Block>
            <Emoji />
            <h1>Page not found.</h1>
            <div className="mb-20">
              <em>
                Maybe what you are looking for is somewhere in our <Link to="/sitemap">Site Map</Link>.
              </em>
            </div>
          </Block>
        </Container>
      </Section>
    </Article>
  </>
);

export default NotFound;

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
