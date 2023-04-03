import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, navigate } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const ImageSharp = styled(Img)`
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 108px;
  height: 108px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px, rgba(0, 0, 0, 0.1) 0 1px 2px;
  div {
    position: absolute;
    padding: 0.5rem 1rem;
    background: rgba(23, 23, 33, 0.55);
    bottom: 0;
    right: 0;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
  }
`;

const TagContainer = styled.div`
  padding: 0 0 0.25rem;
  span {
    margin-bottom: 0.5rem;
  }
  a {
    background: #7d7d82;
    color: #ffffff;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.714285714285714;
    border-radius: 4px;
    margin: 0 0.25rem 0 0;
  }
`;

const MetaContainer = styled.div`
  color: #013a51;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.714285714285714;
  text-align: left;
  span {
    font-size: 0.75rem;
  }
`;

const BodyWrapper = styled.div`
  margin: 0 0 0 1rem;
`;

const MiniPostCard = ({ data }) => {
  //

  const {
    id,
    title,
    slug,
    feature_image: featureImage,
    localFeatureImage: { childImageSharp },
    updated_at: updated,
    published_at: published,
    tags,
  } = data.node;

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const updatedDate = new Date(published).toLocaleDateString('en-SG', dateOptions);

  return (
    <Wrapper>
      <div>
        <ImageContainer>
          {childImageSharp !== null ? <ImageSharp fluid={childImageSharp.fluid} /> : <img src={featureImage} alt="" />}
        </ImageContainer>
      </div>
      <BodyWrapper>
        <TagContainer>
          {tags.length > 0 &&
            tags.map(tag => {
              return (
                <span key={tag.id}>
                  <Link to={`/tag/${tag.slug}`}>{tag.name}</Link>
                </span>
              );
            })}
        </TagContainer>
        <MetaContainer>
          <div>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </div>
          <span>{updatedDate}</span>
        </MetaContainer>
      </BodyWrapper>
    </Wrapper>
  );
};

export default MiniPostCard;

MiniPostCard.propTypes = {
  //
};

MiniPostCard.defaultProps = {
  //
};
