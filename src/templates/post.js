/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Disqus } from 'gatsby-plugin-disqus';
import MarkdownStyles from '../components/MarkdownStyles';
import SEO from '../components/Seo';
import { Section, Container, Block } from '../components/utility';

const pageTransition = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Article = styled(motion.article)`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
  hr {
    border: 1px #2c7a7b solid;
    opacity: 0.2;
  }
`;

const PostStyles = styled(MarkdownStyles)``;

const ImageSharp = styled(Img)`
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 1rem 1rem 1rem 0;
  overflow: hidden;
`;

const Tag = styled.span`
  a {
    background: #68d391;
    color: #000000;
    padding: 0.25rem 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.714285714285714;
    border-radius: 4px;
    margin-bottom: 5rem;
    margin-right: 0.5rem;
  }
`;

const Heading = styled.div`
  h1 {
    color: #013a51;
    font-size: 2.665125rem;
    line-height: 1.219454997;
    margin: 1rem 0 1.375rem;
    font-variation-settings: 'wght' 700;
  }
  p {
    color: #2d3748;
    font-family: 'georgia';
    font-size: 1.125rem;
    line-height: 1.555555556;
    margin-bottom: 1.75rem;
    @media (min-width: 640px) {
      font-size: 1.25rem;
      line-height: 1.4;
      margin-bottom: 1.875rem;
    }
  }
`;

const Meta = styled.div`
  align-items: center;
  display: flex;
  a {
    color: #013a51;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.333333333333333;
  }
`;

const MetaTime = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.714285714285714;
`;

const FeatureImageWrapper = styled.div`
  margin: 2rem 0 2rem 0;
  width: 100%;
`;

const CommentWrapper = styled.div`
  padding: 4rem 0 2rem;
`;

const Post = ({ data, location }) => {
  //
  const post = data.ghostPost;
  const {
    id,
    title,
    excerpt,
    localFeatureImage,
    localProfileImage,
    feature_image: image,
    published_at: datePublished,
    updated_at: dateModified,
  } = data.ghostPost;
  const author = post.authors[0].name;
  const url = location.href;

  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const date = new Date(datePublished);
  const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;

  let fileType = null;
  if (image !== null) {
    fileType = image
      .substr(1 + image.lastIndexOf('/'))
      .split('?')[0]
      .split('.')
      .pop();
  }

  const cloudName = 'ddwgjkkuv';

  const cloudinaryGenerator = srcUrl => {
    const filename = srcUrl.split('/').pop();
    return `sizes="(max-width: 800px) 400px,(max-width: 1170px) 1170px,2000px" src="https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto:good/blog-images/${filename}" srcset="https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto:good,w_300/v1/blog-images/${filename} 300w, https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto:good,w_600/v1/blog-images/${filename} 600w, https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto:good,w_1000/v1/blog-images/${filename} 1000w, https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto:good,w_2000/v1/blog-images/${filename} 2000w"`;
  };

  const unsplashGenerator = srcUrl => {
    const longFilename = srcUrl.split('/').pop();
    const filename = longFilename.split('?')[0];
    const ixid = longFilename.split('ixid=').pop();
    return `sizes="(max-width: 800px) 400px,(max-width: 1170px) 1170px,2000px" src="https://images.unsplash.com/${filename}?ixid=${ixid}&auto=format" srcset="https://images.unsplash.com/${filename}?ixid=${ixid}&auto=format&w=300 300w, https://images.unsplash.com/${filename}?ixid=${ixid}&auto=format&w=600 600w, https://images.unsplash.com/${filename}?ixid=${ixid}&auto=format&w=1000 1000w, https://images.unsplash.com/${filename}?ixid=${ixid}&auto=format&w=2000 2000w"`;
  };

  let { html } = post;
  const images = html.match(/<figure.+?figure>/g);

  if (images) {
    const updatedImages = images.map(imageItem => {
      const src = /src="([^"]*)/.exec(imageItem)[1];
      if (src.includes('cloudinary')) {
        return imageItem.replace(/src="[^"]*"/, cloudinaryGenerator(src));
      }
      if (src.includes('unsplash')) {
        return imageItem.replace(/src="[^"]*"/, unsplashGenerator(src));
      }
      return imageItem;
    });

    images.forEach((item, index) => {
      html = html.replace(item, updatedImages[index]);
    });
  }

  const disqusConfig = {
    url: location.href,
    identifier: id,
    title,
  };

  return (
    <>
      <Article key={location.pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO
          title={title}
          description={excerpt}
          isBlogPost
          image={image}
          url={url}
          author={author}
          datePublished={datePublished}
          dateModified={dateModified}
        />
        <Section>
          <Container>
            <Block>
              <Tag>
                {post.tags.length > 0 &&
                  post.tags.map(tag => (
                    <Link key={tag.id} to={`/tag/${tag.slug}`}>
                      {tag.name}
                    </Link>
                  ))}
              </Tag>
              <Heading>
                <h1>{title}</h1>
                <p>{excerpt}</p>
              </Heading>
              <hr />
              <Meta>
                <div>
                  {localProfileImage.childImageSharp !== null ? (
                    <ImageWrapper>
                      <ImageSharp fluid={post.localProfileImage.childImageSharp.fluid} />
                    </ImageWrapper>
                  ) : (
                    <ImageWrapper>
                      <img href={post.authors[0].profileImage} alt={post.authors[0].name} />
                    </ImageWrapper>
                  )}
                </div>
                <div>
                  <div>
                    <Link className="author-link" to={`/post-by/${post.authors[0].slug}`}>
                      {author}
                    </Link>
                  </div>
                  <MetaTime>
                    <time>
                      {formattedDate}
                      {' | '}
                    </time>
                    <span>{post.reading_time} MIN READ</span>
                  </MetaTime>
                </div>
              </Meta>
              <hr />

              {localFeatureImage !== null && localFeatureImage.childImageSharp !== null ? (
                <FeatureImageWrapper>
                  <ImageSharp fluid={localFeatureImage.childImageSharp.fluid} />
                </FeatureImageWrapper>
              ) : (
                <FeatureImageWrapper>
                  <img src={image} alt="featured" />
                </FeatureImageWrapper>
              )}

              <PostStyles>
                <div
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />
              </PostStyles>

              <CommentWrapper>
                {/* <CommentCount config={disqusConfig} /> */}
                <Disqus config={disqusConfig} />
              </CommentWrapper>
            </Block>
          </Container>
        </Section>
      </Article>
    </>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      published_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string,
      feature_image: PropTypes.string,
      localProfileImage: PropTypes.object,
      localFeatureImage: PropTypes.object,
      reading_time: PropTypes.number.isRequired,
      tags: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,

  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  //
};

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      codeinjection_styles
      title
      html
      excerpt
      published_at
      updated_at
      feature_image
      localFeatureImage {
        childImageSharp {
          fluid(maxWidth: 680) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      localProfileImage {
        childImageSharp {
          fluid(maxWidth: 40) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      reading_time
      authors {
        name
        facebook
        profile_image
        slug
      }
      tags {
        name
        id
        slug
      }
    }
  }
`;
