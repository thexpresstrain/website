import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  min-width: 100%;
  position: relative;

  height: ${props => props.xs};
  @media (min-width: 600px) {
    height: ${props => props.sm};
  }
  @media (min-width: 960px) {
    height: ${props => props.md};
  }
  @media (min-width: 1280px) {
    height: ${props => props.lg};
  }
  @media (min-width: 1920px) {
    height: ${props => props.xl};
  }
`;

const FrameComponent = ({ xs, sm, md, lg, xl, children }) => {
  return (
    <>
      <Wrapper xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        {children}
      </Wrapper>
    </>
  );
};

export default FrameComponent;

FrameComponent.propTypes = {
  children: PropTypes.array.isRequired,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
};

FrameComponent.defaultProps = {
  xs: ``,
  sm: ``,
  md: ``,
  lg: ``,
  xl: ``,
};
