/* eslint-disable react/no-array-index-key */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const Terms = ({
  data: {
    site: { siteMetadata: meta },
  },
  location: { pathname },
}) => {
  //
  return (
    <>
      <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO title="Terms of Use" description="Terms of Use" />
        <TopPadding />
        <Section>
          <Container>
            <Block>
              <MarkdownStyles>
                <h1>Terms of Use</h1>
                <p>
                  These terms and conditions outline the rules and regulations for the use of {meta.siteName} Website,
                  located at <Link to="/">{meta.siteUrl}</Link>.
                </p>
                <p>
                  By accessing this website we assume you accept these terms and conditions. Do not continue to use{' '}
                  {meta.siteName} if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <h2>Terminology</h2>
                <p>
                  The following terminology applies to these Terms and Conditions, Privacy Policy and all Agreements:
                </p>
                <ul>
                  <li>
                    <em>"Client"</em>, <em>"You"</em> and <em>"Your"</em> refers to you, the person log on this website
                    and compliant to the Company’s <em>Terms and Conditions</em>.
                  </li>
                  <li>
                    <em>"The Company"</em>, <em>"Ourselves"</em>, <em>"We"</em>, <em>"Our"</em> and <em>"Us"</em>,
                    refers refers to our Company. <em>"Party"</em>, <em>"Parties"</em>, or <em>"Us"</em>, refers to both
                    the Client and ourselves.
                  </li>
                </ul>
                <p>
                  All terms refer to the offer, acceptance and consideration of payment necessary to undertake the
                  process of our assistance to the Client in the most appropriate manner for the express purpose of
                  meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance
                  with and subject to, prevailing law of Netherlands.
                </p>
                <p>
                  Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she
                  or they, are taken as interchangeable and therefore as referring to same. Cookies We employ the use of
                  cookies.
                </p>
                <h2>Privacy Policy</h2>
                <p>
                  By accessing Magenta Studio, you agreed to use cookies in agreement with the {meta.siteName}'s{' '}
                  <Link to="/privacy">Privacy Policy</Link>.
                </p>
                <h2>Cookies</h2>
                <p>
                  Our interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are
                  used by our website to enable the functionality of certain areas to make it easier for people visiting
                  our website. Some of our affiliate/advertising partners may also use cookies.
                </p>
                <h2>License</h2>
                <p>
                  Unless otherwise stated, {meta.siteName} and/or its licensors own the intellectual property rights for
                  all material on {meta.siteName}. All intellectual property rights are reserved. You may access this
                  from {meta.siteName} for your own personal use subjected to restrictions set in these terms and
                  conditions.
                </p>
                <em>You must not:</em>
                <ul>
                  <li>Republish material from {meta.siteName}.</li>
                  <li>Sell, rent or sub-license material from {meta.siteName}.</li>
                  <li>Reproduce, duplicate or copy material from {meta.siteName}.</li>
                  <li>Redistribute content from {meta.siteName}.</li>
                </ul>
                <p>This Agreement shall begin on the date hereof.</p>
                <h2>User Comments and Reviews</h2>
                <p>
                  Parts of this website offer an opportunity for users to post and exchange opinions and information in
                  certain areas of the website. {meta.siteName} does not filter, edit, publish or review Comments prior
                  to their presence on the website.
                </p>
                <ul>
                  <li>
                    Comments do not reflect the views and opinions of {meta.siteName}, its agents and/or affiliates.
                  </li>
                  <li>Comments reflect the views and opinions of the person who post their views and opinions.</li>
                  <li>
                    To the extent permitted by applicable laws, {meta.siteName} shall not be liable for the Comments or
                    for any liability, damages or expenses caused and/or suffered as a result of any use of and/or
                    posting of and/or appearance of the Comments on this website.
                  </li>
                  <li>
                    {meta.siteName} reserves the right to monitor all Comments and to remove any Comments which can be
                    considered inappropriate, offensive or causes breach of these Terms and Conditions.
                  </li>
                </ul>
                <p>
                  You warrant and represent that: You are entitled to post the Comments on our website and have all
                  necessary licenses and consents to do so;
                </p>
                <ul>
                  <li>
                    The Comments do not invade any intellectual property right, including without limitation copyright,
                    patent or trademark of any third party.
                  </li>
                  <li>
                    The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful
                    material which is an invasion of privacy.
                  </li>
                  <li>
                    The Comments will not be used to solicit or promote business or custom or present commercial
                    activities or unlawful activity.
                  </li>
                  <li>
                    You hereby grant {meta.siteName} a non-exclusive license to use, reproduce, edit and authorize
                    others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                  </li>
                </ul>
                <h2>Hyperlinking to our Content</h2>
                <p>The following organizations may link to our Website without prior written approval:</p>
                <ul>
                  <li>Government agencies.</li>
                  <li>Search engines.</li>
                  <li>News organizations.</li>
                  <li>
                    Online directory distributors may link to our Website in the same manner as they hyperlink to the
                    Websites of other listed businesses and System wide Accredited Businesses except soliciting
                    non-profit organizations, charity shopping malls, and charity fundraising groups which may not
                    hyperlink to our Web site. These organizations may link to our home page, to publications or to
                    other Website information so long as the link:
                    <ol>
                      <li>Is not in any way deceptive</li>
                      <li>
                        Does not falsely imply sponsorship, endorsement or approval of the linking party and its
                        products and/or services.
                      </li>
                      <li>Fits within the context of the linking party’s site.</li>
                    </ol>
                  </li>
                </ul>
                <p>
                  We may consider and approve other link requests from the following types of organizations:
                  commonly-known consumer and/or business information sources;
                </p>
                <ul>
                  <li>dot.com community sites.</li>
                  <li>Associations or other groups representing charities.</li>
                  <li>Online directory distributors.</li>
                  <li>Internet portals.</li>
                  <li>Accounting, law and consulting firms.</li>
                  <li>Educational institutions and trade associations.</li>
                </ul>
                <p>We will approve link requests from these organizations if we decide that:</p>
                <ol>
                  <li>The link would not make us look unfavorably to ourselves or to our accredited businesses.</li>
                  <li>The organization does not have any negative records with us.</li>
                  <li>
                    The benefit to us from the visibility of the hyperlink compensates the absence of {meta.siteName}.
                  </li>
                  <li>The link is in the context of general resource information.</li>
                </ol>
                <p>These organizations may link to our home page so long as the link:</p>
                <ol>
                  <li>Is not in any way deceptive.</li>
                  <li>
                    Does not falsely imply sponsorship, endorsement or approval of the linking party and its products or
                    services.
                  </li>
                  <li>Fits within the context of the linking party’s site.</li>
                </ol>
                <p>
                  If you are one of the organizations listed above and are interested in linking to our website, you
                  must inform us by sending an e-mail to {meta.siteName}.
                </p>
                <p>Please include your;</p>
                <ol>
                  <li>Name</li>
                  <li>Organization Name</li>
                  <li>Contact Information</li>
                  <li>Your Website's Url</li>
                  <li>List of any URLs from which you intend to link to our Website</li>
                  <li>List of the URLs on our site to which you would like to link.</li>
                </ol>
                <p>Wait 2-4 weeks for a response.</p>
                <p>Approved organizations may hyperlink to our Website as follows:</p>
                <ul>
                  <li>By use of our corporate name.</li>
                  <li>By use of the uniform resource locator being linked to.</li>
                  <li>
                    By use of any other description of our Website being linked to that makes sense within the context
                    and format of content on the linking party’s site.
                  </li>
                </ul>
                <p>
                  No use of {meta.siteName}'s logo or other artwork will be allowed for linking absent a trademark
                  license agreement.
                </p>
                <h3>iFrames</h3>
                <p>
                  Without prior approval and written permission, you may not create frames around our Webpages that
                  alter in any way the visual presentation or appearance of our Website.
                </p>
                <h3>Content Liability</h3>
                <p>
                  We shall not be hold responsible for any content that appears on your Website. You agree to protect
                  and defend us against all claims that is rising on your Website.
                </p>
                <p>
                  No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or
                  which infringes, otherwise violates, or advocates the infringement or other violation of, any third
                  party rights.
                </p>
                <h2>Reservation of Rights</h2>
                <p>
                  We reserve the right to request that you remove all links or any particular link to our Website. You
                  approve to immediately remove all links to our Website upon request.
                </p>
                <p>We also reserve the right to amen these terms and conditions and it’s linking policy at any time.</p>
                <p>
                  By continuously linking to our Website, you agree to be bound to and follow these linking terms and
                  conditions.
                </p>
                <h3>Removal of links from our website</h3>
                <p>
                  If you find any link on our Website that is offensive for any reason, you are free to contact and
                  inform us any moment.
                </p>
                <p>
                  We will consider requests to remove links but we are not obligated to or so or to respond to you
                  directly.
                </p>
                <p>
                  We do not ensure that the information on this website is correct, we do not warrant its completeness
                  or accuracy; nor do we promise to ensure that the website remains available or that the material on
                  the website is kept up to date.
                </p>
                <h2>Disclaimer</h2>
                <p>Nothing in this disclaimer will:</p>
                <ul>
                  <li>Limit or exclude our or your liability for death or personal injury.</li>
                  <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation.</li>
                  <li>Limit any of our or your liabilities in any way that is not permitted under applicable law.</li>
                  <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                  <li>
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
                    <ol>
                      <li>Are subject to the preceding paragraph.</li>
                      <li>
                        Govern all liabilities arising under the disclaimer, including liabilities arising in contract,
                        in tort and for breach of statutory duty. As long as the website and the information and
                        services on the website are provided free of charge, we will not be liable for any loss or
                        damage of any nature.
                      </li>
                    </ol>
                  </li>
                </ul>
              </MarkdownStyles>
            </Block>
          </Container>
        </Section>
      </Article>
    </>
  );
};

export default Terms;

Terms.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

Terms.defaultProps = {
  //
};

export const privacyQuery = graphql`
  query {
    site {
      siteMetadata {
        siteName
        siteUrl
      }
    }
  }
`;
