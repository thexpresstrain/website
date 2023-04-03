/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Facebook from '../svg/Facebook';
import Instagram from '../svg/Instagram';
import LinkedIn from '../svg/LinkedIn';
import Twitter from '../svg/Twitter';

const Wrapper = styled.div.attrs({ className: 'bg-white rounded' })`
  margin: 0 auto;
  display: grid;
  justify-items: center;
  text-align: center;
  align-content: start;
  width: 260px;
  height: 100%;
  padding: 2rem 1rem 6rem;
  transition-duration: 500ms;
  position: relative;
  background: #ffffff;
  box-shadow: ${props => (props.current === props.memberSlug ? `rgba(0, 0, 0, 0.2) 2px 6px 10px 0` : '')};

  :hover {
    transition-duration: 500ms;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 6px 10px 0;
    transform: translateY(-4px);
  }

  h3 {
    color: #013a51;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.333333333333333;
    text-align: center;
    margin: 1rem 0 0;
  }

  p {
    max-width: 400px;
    color: #013a51;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.714285714285714;
    margin: 0 0 1rem;
  }
`;

const SocialIconWrapper = styled.div`
  svg {
    height: 20px;
    fill: #000000;
    margin: 0 0.25rem 0;
  }
  a {
    display: inline-block;
  }
`;

const ImageSharp = styled(Img)`
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  height: 112px;
  width: 112px;
  border-radius: 50%;
  margin-bottom: 16px;
  overflow: hidden;
`;

const SPAN = styled.span`
  :not(:last-child) {
    ::after {
      content: ' | ';
    }
  }
`;

const ButtonWrapper = styled.div`
  margin: 1rem 0 0;
  a {
    :focus {
      outline: none;
    }
    :hover {
      color: #000000;
      border-bottom: 2px #2a4365 solid;
    }
    cursor: pointer;
    color: #1a202c;
    transition: all 0.2s ease-in-out;
    border-bottom: 2px #a0aec0 solid;
  }
  position: absolute;
  bottom: 0;
  padding: 0 0 2rem;
`;

const MemberCard = ({ data, current }) => {
  //
  const {
    id,
    facebook,
    instagram,
    linkedIn,
    name,
    title,
    twitter,
    slug: { current: memberSlug },
    profileImage: {
      asset: { fluid },
    },
  } = data.node;

  return (
    <Wrapper current={current} memberSlug={memberSlug}>
      <ImageWrapper>
        <ImageSharp fluid={fluid} />
      </ImageWrapper>
      <div>
        <h3>{name}</h3>
        <p>
          {title.map((position, index) => {
            return <SPAN key={index}>{position}</SPAN>;
          })}
        </p>
      </div>
      <SocialIconWrapper>
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        )}
        {linkedIn && (
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        )}
      </SocialIconWrapper>
      <ButtonWrapper>
        <Link to={`/team/${memberSlug}`}>{`Read ${name.split(' ', 1)}'s bio`}</Link>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MemberCard;

MemberCard.propTypes = {
  data: PropTypes.shape().isRequired,
  current: PropTypes.string,
};

MemberCard.defaultProps = {
  current: '',
};
