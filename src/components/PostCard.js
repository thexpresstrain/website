import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import prune from 'voca/prune';
import { Anchor } from './primitives/Buttons';

const Wrapper = styled.div.attrs({ className: 'bg-white' })`
  position: relative;
  height: 100%;
  background: #f9f9f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition-delay: 0s, 0s;
  transition-duration: 0.3s, 0.3s;
  transition-property: box-shadow, transform;
  transition-timing-function: ease-in-out, ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 2px 6px 10px 0;
    transform: translateY(-4px);
  }

  h2 {
    color: #013a51;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.333333333333333;
    text-align: left;
    margin: 1.5rem 0 1rem 0;
  }
  span {
    max-width: 26.5rem;
    color: #696969;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.714285714285714;
    text-align: left;
    b {
      font-weight: 600;
      color: #013a51;
    }
    em {
    }
  }
`;

const CardBody = styled.div`
  position: relative;
  padding: 0 2rem 6rem;
`;

const Excerpt = styled.div`
  max-width: 26.5rem;
  color: #1a202c;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.714285714285714;
  text-align: left;
  margin: 1rem 0 0;
  b {
    font-weight: 600;
    color: #013a51;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 2rem;
  padding-right: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 272px;
  width: 100%;
  overflow: hidden;
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

const ImageSharp = styled(Img)`
  height: 100%;
`;

const PostCard = ({ data }) => {
  //
  const {
    id,
    title,
    slug,
    feature_image: image,
    localFeatureImage,
    localProfileImage,
    featured,
    excerpt,
    updated_at: updated,
    published_at: published,
    reading_time: readingTime,
    authors,
    tags,
  } = data.node;

  let fileType = null;
  if (image !== null) {
    fileType = image
      .substr(1 + image.lastIndexOf('/'))
      .split('?')[0]
      .split('.')
      .pop();
  }

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const truncatedExcerpt = prune(excerpt, 200, ' ...');

  const updatedDate = new Date(published).toLocaleDateString('en-SG', dateOptions);

  return (
    <Wrapper>
      <ImageContainer>
        {localFeatureImage !== null && localFeatureImage.childImageSharp !== null ? (
          <ImageSharp fluid={localFeatureImage.childImageSharp.fluid} />
        ) : (
          <img src={image} alt="" />
        )}
        {tags.length > 0 && <div>{tags[0].name}</div>}
      </ImageContainer>
      <CardBody>
        <h2>{title}</h2>
        <span>
          <Link to={`/post-by/${authors[0].slug}`}>
            <b>{authors[0].name}</b>
          </Link>{' '}
          | <b>{updatedDate}</b>
          <br />
          <em>{readingTime} min read time</em>
        </span>
        <Excerpt>{truncatedExcerpt}</Excerpt>
      </CardBody>
      <ButtonWrapper>
        <Anchor
          onClick={() => {
            navigate(`/blog/${slug}`);
          }}
        >
          Read More
        </Anchor>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PostCard;

PostCard.propTypes = {
  data: PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      localFeatureImage: PropTypes.object,
      localProfileImage: PropTypes.object,
      featured: PropTypes.bool.isRequired,
      excerpt: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      reading_time: PropTypes.number.isRequired,
      authors: PropTypes.array.isRequired,
      tags: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

PostCard.defaultProps = {
  //
};
