import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SEO from '../components/Seo';
import MarkdownStyles from '../components/MarkdownStyles';
import { Section, Container, Block, TopPadding } from '../components/utility';

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

const Cookies = ({ location: { pathname } }) => (
  <>
    <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
      <SEO title="Cookie Policy" description="Cookie Policy" />
      <TopPadding />
      <Section>
        <Container>
          <Block>
            <MarkdownStyles>
              <h1>Cookie Policy</h1>
              <p>This website stores cookies on your computer.</p>
              <p>
                These cookies are used to collect information about how you interact with our website and allow us to
                remember you.
              </p>
              <p>
                We use this information in order to improve and customize your browsing experience and for analytics and
                metrics about our visitors both on this website and other media.
              </p>
              <p>
                To find out more about the cookies we use, see our <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </MarkdownStyles>
          </Block>
        </Container>
      </Section>
    </Article>
  </>
);

export default Cookies;

Cookies.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
