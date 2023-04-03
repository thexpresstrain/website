import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql, navigate } from 'gatsby';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import tw from 'tailwind.macro';
import Logomark from './svg/Logomark';
import Logotype from './svg/Logotype';
import { Container } from './utility';
import { Button } from './primitives/Buttons';

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const Wrapper = styled.nav.attrs({ className: 'bg-gray-100 shadow' })`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const NavContainer = styled.div.attrs({
  className: 'container flex justify-between py-4 px-8',
})``;

const MobileMenuButton = styled.button.attrs({ className: 'font-bold' })`
  position: relative;
  z-index: 1002;
  :focus {
    outline: none;
  }
  color: ${props => (props.open ? '#ffffff' : '#2d3748;')};
  @media (min-width: ${props => props.threshold}) {
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

const MobileMenu = styled(motion.div).attrs({ className: 'bg-gray-800' })`
  position: absolute;
  z-index: 1001;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  & {
    a {
      ${tw`block mb-3`}
    }
  }
`;

const CookieNotice = styled(motion.div).attrs({
  className: 'py-4 px-8 bg-gray-900 text-white',
})`
  position: fixed;
  z-index: 1002;
  bottom: 0;
  width: 100%;
  opacity: 0;
  border-top: 8px #68d391 solid;
`;

const CookieMessageContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 0 10rem;
`;

const CookieButtonWrapper = styled.div`
  display: grid;
  padding: 1rem 0 2rem;
  justify-items: end;
`;

const MobileMenuContent = styled.div.attrs({
  className: 'pt-40 pr-8 text-right text-white container',
})``;

const LinkContainer = styled.div.attrs()`
  @media (max-width: ${props => props.threshold}) {
    display: none;
  }
  & {
    a {
      ${tw`px-2 text-xs font-semibold text-gray-900 uppercase focus:outline-none`}
    }
  }
`;

const RightContainer = styled.div.attrs({ className: 'flex items-center' })``;

const LogoContainer = styled.div.attrs({ className: 'flex items-center' })`
  position: relative;
  z-index: 1002;
  #logomark {
    height: 52px;
    margin-right: 1.5rem;
    display: none;
    @media (min-width: 1025px) {
      display: block;
    }
  }
  #logotype {
    width: 160px;
  }
  svg {
    fill: ${props => (props.open ? '#ffffff' : '#000000')};
  }
`;

const Navbar = ({ threshold, path }) => {
  //

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(QUERY);

  const [isOpen, toggleMenu] = useState(false);
  const [showCookiePopup, toggleCookiePopup] = useState(false);

  useEffect(() => {
    const cookie = JSON.parse(localStorage.getItem(siteUrl));
    const now = Date.now();
    if (!cookie) {
      toggleCookiePopup(true);
    }
    if (cookie) {
      const { cookieExpiry } = cookie;
      if (now > cookieExpiry) {
        toggleCookiePopup(true);
      }
    }
  }, []);

  const handleMobileMenu = () => {
    toggleMenu(!isOpen);
  };

  const closeMobileMenu = () => {
    toggleMenu(false);
  };

  const setPrivacyCookie = () => {
    const cookieExpiry = Date.now() + 604800000;
    localStorage.setItem(siteUrl, JSON.stringify({ privacyAgree: 'true', cookieExpiry }));
    toggleCookiePopup(false);
  };

  const handleScroll = () => {
    navigate('/');
    scroller.scrollTo('ventureBuilder', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  };

  const variants = {
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        delay: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: '100%',
      transition: {
        delay: 0,
      },
    },
  };

  return (
    <>
      <Wrapper>
        <NavContainer>
          <LogoContainer open={isOpen}>
            <Link onClick={closeMobileMenu} to="/">
              <Logomark />
            </Link>
            <Link onClick={closeMobileMenu} to="/">
              <Logotype />
            </Link>
          </LogoContainer>
          <RightContainer>
            <LinkContainer threshold={threshold}>
              <Link to="/#ventureBuilder">Venture Builder</Link>
              <Link to="/coworking">TXT Hub</Link>
              <a href="http://koto.thexpresstrain.com" target="_blank" rel="noopener noreferrer">
                KOTO
              </a>
              <Link to="/txt">TXT Team</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/career">Career</Link>
              <Link to="/blog">Blog</Link>
            </LinkContainer>
          </RightContainer>
          <MobileMenuButton open={isOpen} threshold={threshold} onClick={handleMobileMenu}>
            {isOpen ? 'Close' : 'Menu'}
          </MobileMenuButton>
        </NavContainer>
        <MobileMenu
          open={isOpen}
          initial={{ translateX: '100%' }}
          animate={{ translateX: isOpen ? '0%' : '100%' }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.1 }}
        >
          <MobileMenuContent>
            <Link onClick={closeMobileMenu} to="/#ventureBuilder">
              Venture Building
            </Link>
            <Link onClick={closeMobileMenu} to="/coworking">
              Co-Working
            </Link>
            <a
              href="http://koto.thexpresstrain.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              KOTO
            </a>
            <Link onClick={closeMobileMenu} to="/txt">
              TXT
            </Link>
            <Link onClick={closeMobileMenu} to="/contact">
              Contact
            </Link>
            <Link onClick={closeMobileMenu} to="/career">
              Career
            </Link>
            <Link onClick={closeMobileMenu} to="/blog">
              Blog
            </Link>
          </MobileMenuContent>
        </MobileMenu>
      </Wrapper>
      <AnimatePresence>
        {showCookiePopup && (
          <CookieNotice initial="hidden" animate="visible" exit="hidden" variants={variants}>
            <Container>
              <CookieButtonWrapper>
                <Button type="button" onClick={setPrivacyCookie}>
                  Close
                </Button>
              </CookieButtonWrapper>
              <CookieMessageContainer>
                Cookies help us provide, protect and improve our website. By using our website, you agree to our use of
                cookies.
              </CookieMessageContainer>
            </Container>
          </CookieNotice>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  threshold: PropTypes.string,
};

Navbar.defaultProps = {
  threshold: '800px',
};
