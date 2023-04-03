import styled from 'styled-components';

const MarkdownStyles = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, “Roboto”, “Oxygen”, “Ubuntu”, “Cantarell”, “Fira Sans”,
      “Droid Sans”, “Helvetica Neue”, sans-serif;
  }

  a,
  p,
  em,
  li {
    font-family: Georgia, serif;
  }

  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    word-break: break-word;
    outline: 0;
    font-weight: bolder;
    color: #000000;
    box-shadow: #000000 0 -1px 0 inset;
    :hover {
      color: #3182ce; /* brand color */
      box-shadow: #3182ce 0 -1px 0 inset;
    }
    cursor: pointer;
  }

  strong {
    color: #000000;
    font-weight: bolder;
  }

  em {
    color: tomato; /* dark brand color */
    font-style: normal;
  }

  ul {
    list-style-type: square;
    list-style-position: outside;
    margin: 2.5rem 2rem;
  }

  ol {
    list-style-type: decimal;
    list-style-position: outside;
    margin: 2.5rem 2rem;
  }

  li {
    font-size: 1.125em;
    margin-bottom: 1rem;
    color: #000000;
  }

  blockquote {
    background: #f9f9f9;
    border-left: 8px solid #68d391;
    margin: 1.5em 1rem 0 0;
    padding: 1rem 2rem;
  }

  color: #313b3f;
  max-width: 800px;
  margin: 0 auto;

  figcaption {
    font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, “Roboto”, “Oxygen”, “Ubuntu”, “Cantarell”, “Fira Sans”,
      “Droid Sans”, “Helvetica Neue”, sans-serif;
    text-align: center;
    margin-top: 0.5rem;
    color: #4a5568;
    font-size: 0.875rem;
    a {
      font-weight: 500;
      color: #000000;
    }
  }

  figure {
    margin-bottom: 2.5rem;
    img {
      width: 100%;
    }
  }

  hr {
    border: 1px #68d391 solid;
    margin-bottom: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #013a51;
  }

  h1 {
    font-size: 2.665125rem;
    line-height: 1.219454997;
    margin-bottom: 1.375rem;
    font-variation-settings: 'wght' 700;
  }
  h2 {
    font-size: 1.999125rem;
    line-height: 1.250547114;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-variation-settings: 'wght' 700;
  }

  h3 {
    font-size: 1.499625rem;
    line-height: 1.166958406;
    margin-bottom: 0.75rem;
    font-variation-settings: 'wght' 700;
  }

  h4,
  h5,
  h6 {
    font-size: 0.875rem;
    font-weight: bolder;
    margin-bottom: 1.875rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.555555556;
    margin-bottom: 1.75rem;
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 2.96125rem;
      line-height: 1.097509498;
      margin-bottom: 1.5rem;
      font-variation-settings: 'wght' 700;
    }
    h2 {
      font-size: 2.22125rem;
      line-height: 1.125;
      margin-top: 3rem;
      margin-bottom: 1rem;
      font-variation-settings: 'wght' 700;
    }
    h3 {
      font-size: 1.66625rem;
      line-height: 1.050262566;
      margin-bottom: 0.875rem;
      font-variation-settings: 'wght' 700;
    }

    h4,
    h5,
    h6 {
      font-size: 0.875rem;
      font-weight: bolder;
      margin-bottom: 1.875rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.4;
      margin-bottom: 1.875rem;
    }
  }
`;

export default MarkdownStyles;
