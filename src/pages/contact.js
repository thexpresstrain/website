import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SEO from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { service } from '../Schema/service';
import FormSection from '../components/_contact/FormSection';
import { TopPadding } from '../components/utility';
import Map from '../components/_contact/Map';
import Newsletter from '../components/_homepage/Newsletter';

const pageTransition = {
  initial: { opacity: 0, x: 80 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    x: -80,
  },
};

const Article = styled(motion.article)``;

const Contact = ({ location: { pathname } }) => {
  return (
    <>
      <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO title="Contact Us" description="Contact Us. Submit feedback and enquries." />
        <TopPadding />
        <FormSection />
        <Map />
        <Newsletter />
        <JsonLd schema={service} />
      </Article>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
