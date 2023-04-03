import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Section, Container, Block, Heading } from '../utility';
import Facebook from '../svg/Facebook';
import Instagram from '../svg/Instagram';
import Youtube from '../svg/Youtube';
import Twitter from '../svg/Twitter';
import Email from '../svg/Email';
import Clock from '../svg/Clock';
import Google from '../svg/GoogleMap';
import GoogleMapPin from '../svg/GoogleMapPin';

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

const Wrapper = styled.div.attrs({ className: 'bg-gray-700' })``;

const GridLayout = styled.div`
  display: grid;
  @media (min-width: 960px) {
    grid-template-columns: 21rem 1fr;
    grid-column-gap: 2rem;
  }
`;

const GoogleMap = styled.div`
  iframe {
    width: 100%;
    height: 600px;
    border: none;
  }
`;
const Meta = styled.div`
  padding: 0 1rem 4rem;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  hr {
    margin: 2rem 0;
  }
`;

const AddressStyles = styled.div.attrs({ className: 'text-white' })`
  h3 {
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
  span {
    display: inline-block;
    margin: 0 0 0.25rem 0;
  }
  svg {
    width: 18px;
    margin-right: 1rem;
    fill: #ffffff;
  }
`;

const SubSection = styled.div`
  display: flex;
  padding: 1rem 0;
`;

const SocialIconContainer = styled.div.attrs({ className: 'mb-4 flex' })`
  justify-content: center;
  svg {
    height: 20px;
    margin-right: 1rem;
    fill: #ffffff;
  }
`;

const Map = () => {
  //
  const {
    site: { siteMetadata },
  } = useStaticQuery(QUERY);

  const { contact, business, socialMedia } = siteMetadata;

  return (
    <Wrapper>
      <Section>
        <Container>
          <Block>
            <GridLayout>
              <Meta>
                <Heading xs="center" sm="center" md="center" lg="center" dark>
                  <h2>Our Location</h2>
                  <p>Use the interactive map to find us</p>
                </Heading>
                <SocialIconContainer>
                  <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook />
                  </a>
                  <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram />
                  </a>
                  <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter />
                  </a>
                  <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube />
                  </a>
                </SocialIconContainer>
                <hr />
                <AddressStyles>
                  <SubSection>
                    <div>
                      <GoogleMapPin />
                    </div>
                    <div>
                      <h3>Address</h3>
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
                    </div>
                  </SubSection>
                  <SubSection>
                    <div>
                      <Email />
                    </div>
                    <div>
                      <h3>Contact</h3>
                      <a href={`mailto:${contact.email}`}>
                        <span>{contact.email}</span>
                      </a>
                      <br />
                      <a href={`tel:${contact.telephone}`}>
                        <span>{contact.telephone}</span>
                      </a>
                    </div>
                  </SubSection>
                  <SubSection>
                    <div>
                      <Clock />
                    </div>
                    <div>
                      <h3>Hours</h3>
                      <span>{business.dayOfWeekRange}</span>
                      <br />
                      <span>
                        {business.opens}-{business.closes}
                      </span>
                    </div>
                  </SubSection>
                </AddressStyles>
              </Meta>
              <div>
                <GoogleMap>
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5788016531883!2d103.63175300143868!3d1.4282323117086144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0b16b7ad2faf%3A0xe6adca6e4cd2795c!2sThe+Xpress+Train!5e0!3m2!1sen!2smy!4v1547559365916"
                  />
                </GoogleMap>
              </div>
            </GridLayout>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Map;
