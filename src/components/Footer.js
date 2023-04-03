import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Logo from './svg/Logo';
import Facebook from './svg/Facebook';
import Instagram from './svg/Instagram';
import Youtube from './svg/Youtube';
import Twitter from './svg/Twitter';

const QUERY = graphql`
  query {
    site {
      siteMetadata {
        contact {
          email
          address {
            streetAddress
            addressLocality
            addressRegion
            postalCode
            addressCountryLong
          }
          telephone
          googleMap
        }
        business {
          dayOfWeekRange
          opens
          closes
        }
        socialMedia {
          facebook
          instagram
          twitter
          youtube
        }
      }
    }
  }
`;

const Wrapper = styled.footer.attrs({
  className: 'pt-12 pb-20 bg-blue-900 text-white px-10 text-sm relative',
})`

  #logo {
    height: 80px;
  }


  border-top: 1rem #3182ce solid;
  hr {
    @media (min-width: 600px) {
      max-width: 200px;
    }
    margin-bottom: 1rem;
    border: 1px #2c5282 solid;
  }
  & {
    h2 {
      ${tw`mt-4`}
    }
    h2,
    h3 {
      ${tw`mb-2 text-lg font-bold text-green-400`}
    }
    span {
      ${tw`leading-7`}
    }
  }
`;

const SubSection = styled.div.attrs({ className: 'mb-6' })``;

const SocialIconContainer = styled.div.attrs({ className: 'mb-4 flex' })`
  svg {
    height: 20px;
    margin-right: 1rem;
    fill: #ffffff;
  }
`;

const GridLayout = styled.div.attrs({ className: 'container' })`
  max-width: 800px;
  display: grid;
  #grid-item-logo {
    grid-area: logo;
    margin-bottom: 4rem;
    display: grid;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  #grid-item-address {
    grid-area: address;
  }
  #grid-item-contact {
    grid-area: contact;
  }
  #grid-item-hours {
    grid-area: hours;
  }
  #grid-item-legal {
    grid-area: legal;
  }
  #grid-item-links {
    grid-area: links;
  }
  grid-template-columns: 1fr;
  grid-template-areas:
    'logo'
    'address'
    'contact'
    'hours'
    'legal'
    'links';

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'logo logo'
      'address contact'
      'hours legal'
      'links .';
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      'logo logo . '
      'address contact hours'
      'legal legal links';
  }
`;

const SubFooter = styled.div.attrs({ className: 'bg-gray-800 absolute text-gray-200 py-6 px-10 text-xs' })`
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  div {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Footer = () => {
  //
  const {
    site: { siteMetadata },
  } = useStaticQuery(QUERY);

  const { contact, business, socialMedia } = siteMetadata;

  return (
    <>
      <Wrapper>
        <GridLayout>
          <div id="grid-item-logo">
            <Logo />
            <div>
              <h2>Build, Launch and Grow</h2>
              <SocialIconContainer>
                <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="facebook">
                  <Facebook />
                </a>
                <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="instagram">
                  <Instagram />
                </a>
                <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="twitter">
                  <Twitter />
                </a>
                <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer" aria-label="youtube">
                  <Youtube />
                </a>
              </SocialIconContainer>
            </div>
          </div>

          <div id="grid-item-address">
            <SubSection>
              <h3>Address</h3>
              <hr />
              <a href={contact.googleMap} target="_blank" rel="noopener noreferrer">
                <span>{contact.address.streetAddress}</span>
                <br />
                <span>
                  {contact.address.postalCode} {contact.address.addressLocality}
                </span>
                <br />
                <span>
                  {contact.address.addressRegion}, {contact.address.addressCountryLong}
                </span>
              </a>
            </SubSection>
          </div>

          <div id="grid-item-contact">
            <SubSection>
              <h3>Contact</h3>
              <hr />
              <a href={`mailto:${contact.email}`}>
                <span>{contact.email}</span>
              </a>
              <br />
              <a href={`tel:${contact.telephone}`}>
                <span>{contact.telephone}</span>
              </a>
            </SubSection>
          </div>

          <div id="grid-item-hours">
            <SubSection>
              <h3>Hours</h3>
              <hr />
              <span>{business.dayOfWeekRange}</span>
              <br />
              <span>
                {business.opens}-{business.closes}
              </span>
            </SubSection>
          </div>

          <div id="grid-item-legal">
            <SubSection>
              <h3>Legal</h3>
              <hr />
              <Link to="privacy">
                <span>Privacy Policy</span>
              </Link>
              <br />
              <Link to="terms">
                <span>Terms of Use</span>
              </Link>
              <br />
              <Link to="/cookies">
                <span>Cookie Policy</span>
              </Link>
            </SubSection>
          </div>

          <div id="grid-item-links">
            <SubSection>
              <h3>Links</h3>
              <hr />
              <Link to="/sitemap">Sitemap</Link>
            </SubSection>
          </div>
        </GridLayout>
        <SubFooter>
          <div>Copyright © 2020 | The Xpress Train</div>
        </SubFooter>
      </Wrapper>
    </>
  );
};

export default Footer;
