/* eslint-disable react/no-array-index-key */

import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SEO from '../components/Seo';
import MarkdownStyles from '../components/MarkdownStyles';
import { Section, Container, Block, TopPadding } from '../components/utility';

const Article = styled(motion.article)``;

const SPAN = styled.span`
  :not(:last-child) {
    ::after {
      content: ' / ';
    }
  }
`;

const Privacy = ({
  data: {
    site: { siteMetadata: meta },
  },
  location: { pathname },
}) => {
  //
  // Todo isInstagram | isLinkedIn links to opt-out
  const isFacebook = meta.marketing.includes('Facebook');
  const isInstagram = meta.marketing.includes('Instagram');
  const isLinkedIn = meta.marketing.includes('LinkedIn');
  const isGoogleAdWords = meta.marketing.includes('Google Adwords');
  const isBing = meta.marketing.includes('Bing');

  const pageTransition = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO title="Privacy Policy" description={`${meta.siteName}'s Privacy Policy`} />
        <TopPadding />
        <Section>
          <Container>
            <Block>
              <MarkdownStyles>
                <h1>{meta.siteName}'s Privacy Policy</h1>
                <h4>Last Modified: January 23, 2020</h4>
                <p>
                  This Privacy Policy describes how your personal information is collected, used, and shared when you
                  visit or make a purchase from <Link to="/">{meta.siteUrl}</Link> &#40;the “Site”&#41;.
                </p>
                <h2>Personal Information We Collect</h2>
                <p>
                  When you visit the Site, we automatically collect certain information about your device, including
                  information about your web browser, IP address, time zone, and some of the cookies that are installed
                  on your device. Additionally, as you browse the Site, we collect information about the individual web
                  pages or products that you view, what websites or search terms referred you to the Site, and
                  information about how you interact with the Site. We refer to this automatically-collected information
                  as “Device Information.”
                </p>
                <p>We collect Device Information using the following technologies:</p>
                <ul>
                  <li>
                    “Cookies” are data files that are placed on your device or computer and often include an anonymous
                    unique identifier. For more information about cookies, and how to disable cookies, visit{' '}
                    <a href="https://www.allaboutcookies.org/" rel="noopener noreferrer" target="_blank">
                      https://www.allaboutcookies.org/
                    </a>
                  </li>
                  <li>
                    “Log files” track actions occurring on the Site, and collect data including your IP address, browser
                    type, Internet service provider, referring/exit pages, and date/time stamps.
                  </li>
                  <li>
                    “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you
                    browse the
                  </li>
                </ul>
                <p>
                  Additionally when you make a purchase or attempt to make a purchase through the Site, we collect
                  certain information from you, including your name, billing address, shipping address, payment
                  information including credit card numbers, email address, and phone number. We refer to this
                  information as “Order Information.”
                </p>
                <p>
                  When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device
                  Information and Order Information.
                </p>
                <h2>How Do We Use Your Personal Information?</h2>
                <p>
                  We use the Order Information that we collect generally to fulfill any orders placed through the Site
                  &#40;including processing your payment information, arranging for shipping, and providing you with
                  invoices and/or order confirmations&#41;.
                </p>
                <p>
                  Additionally, we use this Order Information to: Communicate with you; Screen our orders for potential
                  risk or fraud; and when in line with the preferences you have shared with us, provide you with
                  information or advertising relating to our products or services.
                </p>
                <p>
                  We use the Device Information that we collect to help us screen for potential risk and fraud &#40;in
                  particular, your IP address&#41;, and more generally to improve and optimize our Site &#40;for
                  example, by generating analytics about how our customers browse and interact with the Site, and to
                  assess the success of our marketing and advertising campaigns&#41;.
                </p>
                <h2>Sharing Your Personal Information</h2>
                <p>
                  We share your Personal Information with third parties to help us use your Personal Information, as
                  described above.
                </p>
                {meta.eCommerce.service == 'Shopify' ? (
                  <p>
                    We use Shopify to power our online store. You can read more about how Shopify uses your Personal
                    Information here:{' '}
                    <a href="https://www.shopify.com/legal/privacy" rel="noopener noreferrer" target="_blank">
                      https://www.shopify.com/legal/privacy
                    </a>
                    .
                  </p>
                ) : (
                  ''
                )}
                <p>
                  We use Google Analytics to help us understand how our customers use the Site. You can read more about
                  how Google uses your Personal Information here:{' '}
                  <a href="https://www.google.com/intl/en/policies/privacy/" rel="noopener noreferrer" target="_blank">
                    https://www.google.com/intl/en/policies/privacy/
                  </a>
                  .
                </p>
                <p>
                  You can also opt-out of Google Analytics here:{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.
                </p>
                <p>
                  We may also share your Personal Information to comply with applicable laws and regulations, to respond
                  to a subpoena, search warrant or other lawful request for information we receive, or to otherwise
                  protect our rights.
                </p>
                <h2>
                  {meta.marketing.map((service, index) => (
                    <SPAN key={index}>{service}</SPAN>
                  ))}
                </h2>
                <p>
                  As described above, we use your Personal Information to provide you with targeted advertisements or
                  marketing communications we believe may be of interest to you. For more information about how targeted
                  advertising works, you can visit the Network Advertising Initiative’s &#40;“NAI”&#41; educational page
                  at{' '}
                  <a
                    href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
                  </a>
                  .
                </p>
                <p>You can opt out of targeted advertising by:</p>
                <ul>
                  {isFacebook ? (
                    <>
                      <li>
                        Facebook:{' '}
                        <a href="https://www.facebook.com/settings/?tab=ads" rel="noopener noreferrer" target="_blank">
                          https://www.facebook.com/settings/?tab=ads
                        </a>
                      </li>
                    </>
                  ) : (
                    ''
                  )}
                  {isGoogleAdWords ? (
                    <>
                      <li>
                        Google AdWords:{' '}
                        <a
                          href="https://www.google.com/settings/ads/anonymous"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          https://www.google.com/settings/ads/anonymous
                        </a>
                      </li>
                    </>
                  ) : (
                    ''
                  )}
                  {isBing ? (
                    <>
                      <li>
                        Bing:{' '}
                        <a
                          href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                        </a>
                      </li>
                    </>
                  ) : (
                    ''
                  )}
                </ul>
                <p>
                  Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s
                  opt-out portal at:{' '}
                  <a href="http://optout.aboutads.info/" rel="noopener noreferrer" target="_blank">
                    http://optout.aboutads.info/
                  </a>
                  .
                </p>
                <h2>Do Not Track</h2>
                <p>
                  Please note that we do not alter our Site’s data collection and use practices when we see a Do Not
                  Track signal from your browser.
                </p>
                <h2>Your Rights if you are a European resident</h2>
                <p>
                  You have the right to access personal information we hold about you and to ask that your personal
                  information be corrected, updated, or deleted. If you would like to exercise this right, please
                  contact us through the contact information below.
                </p>
                <p>
                  Additionally, if you are a European resident we note that we are processing your information in order
                  to fulfill contracts we might have with you &#40;for example if you make an order through the
                  Site&#41;, or otherwise to pursue our legitimate business interests listed above.
                </p>
                <p>
                  Additionally, please note that your information will be transferred outside of Europe, including to
                  Canada, the United States, Malaysia and Singapore.
                </p>
                <h2>Data Retention</h2>
                <p>
                  When you place an order through the Site, we will maintain your Order Information for our records
                  unless and until you ask us to delete this information.
                </p>
                <h2>Minors</h2>
                <p>The Site is not intended for individuals under the age of {meta.business.ageRestriction}.</p>
                <h2>Changes</h2>
                <p>
                  We may update this privacy policy from time to time in order to reflect, for example, changes to our
                  practices or for other operational, legal or regulatory reasons.
                </p>
                <h2>Contact Us</h2>
                <p>
                  For more information about our privacy practices, if you have questions, or if you would like to make
                  a complaint, please contact us by:
                </p>
                <ul>
                  <li>
                    Email: <a href={meta.contact.email}>{meta.contact.email}</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact Form</Link>
                  </li>
                </ul>
                <p>or by mail using the details provided below:</p>
                <blockquote>
                  <strong>{meta.contact.address.streetAddress}</strong>
                  <br />
                  <strong>{meta.contact.address.postalCode}</strong>
                  <br />
                  <strong>{meta.contact.address.addressCountryLong}</strong>
                </blockquote>
              </MarkdownStyles>
            </Block>
          </Container>
        </Section>
      </Article>
    </>
  );
};

export default Privacy;

Privacy.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const privacyQuery = graphql`
  query {
    site {
      siteMetadata {
        siteName
        siteUrl
        contact {
          address {
            streetAddress
            postalCode
            addressCountryLong
          }
          email
        }
        business {
          ageRestriction
        }
        eCommerce {
          service
        }
        marketing
      }
    }
  }
`;
