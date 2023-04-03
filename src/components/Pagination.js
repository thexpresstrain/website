import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0.25rem 0 4rem;
`;

const Container = styled.nav`
  display: grid;
  justify-content: center;
  text-align: center;
`;

const NumberWrapper = styled.div`
  color: #013a51;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.714285714285714;
  margin-bottom: 0.5rem;
`;

const NavWrapper = styled.div`
  display: flex;
  a {
    background: #2a4365;
    color: #ffffff;
    padding: 0.25rem 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.714285714285714;
    border-radius: 4px;
  }
`;

const Pagination = ({ data }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = data;
  //

  return (
    <Wrapper>
      <Container role="navigation">
        <div>
          <NumberWrapper>
            {numberOfPages > 1 && (
              <div>
                Page {humanPageNumber} of {numberOfPages}
              </div>
            )}
          </NumberWrapper>
          <NavWrapper>
            {previousPagePath && (
              <Link to={previousPagePath} rel="prev">
                Newer posts
              </Link>
            )}
            {previousPagePath && nextPagePath && <span>&ensp;</span>}
            {nextPagePath && (
              <Link to={nextPagePath} rel="next">
                Older Posts
              </Link>
            )}
          </NavWrapper>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Pagination;

Pagination.propTypes = {
  data: PropTypes.object.isRequired,
};
