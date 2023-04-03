/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { LinkButton } from '../primitives/Buttons';

const ImageSharp = styled(Img)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  color: #ffffff;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 0 7rem 0;
  background: #2d3748;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition-delay: 0s, 0s;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: ease-in-out, ease-in-out;
  hr {
    border: 0.5px #00af75 solid;
    width: 28px;
    margin: 1rem auto 1rem;
  }

  &:hover {
    background: #1a202c;
    box-shadow: rgba(0, 0, 0, 0.2) 2px 6px 10px 0;
    transform: translateY(-4px);
    li {
      transition-duration: 0.3s, 0.3s;
      color: #ffffff;
    }
  }
`;

const ImageWrapper = styled.div`
  height: 16rem;
  width: 100%;
`;

const PriceWrapper = styled.div`
  height: 9rem;
  width: 9rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  text-align: center;
  top: 13rem;
  left: 50%;
  margin-left: -4.5rem;
  font-size: 28px;
  font-weight: 900;
  color: #0a6edd;
  line-height: 1;
  padding-top: 3rem;
  span {
    color: #171721;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    line-height: 1;
  }
`;

const SkuWrapper = styled.div`
  margin: 8rem 0 0;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;

const DescriptionWrapper = styled.div`
  min-height: 6rem;
  margin: 1rem 0;
  text-align: center;
  padding: 0 2rem 0.5rem;
`;

const FeatureWrapper = styled.div`
  text-align: center;
  padding: 0 1rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #f7fafc;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  li {
    transition-duration: 0.3s, 0.3s;
    margin-bottom: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
`;

const PricingCard = ({ data, phone }) => {
  //
  const {
    image: {
      asset: { fluid },
    },
    type,
    price,
    description,
    features,
  } = data.node;

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageSharp fluid={fluid} />
      </ImageWrapper>
      <PriceWrapper id="price">
        RM{price}
        <br />
        <span>month</span>
      </PriceWrapper>
      <SkuWrapper>{type}</SkuWrapper>
      <hr />
      <DescriptionWrapper>{description}</DescriptionWrapper>
      <hr />
      <FeatureWrapper>
        <ul>
          {features.map((feature, index) => {
            return <li key={index}>{feature}</li>;
          })}
        </ul>
      </FeatureWrapper>
      <ButtonWrapper>
        <LinkButton href={`tel:${phone}`}>Call Now</LinkButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PricingCard;

PricingCard.propTypes = {
  data: PropTypes.shape().isRequired,
  phone: PropTypes.string.isRequired,
};

PricingCard.defaultProps = {
  //
};
