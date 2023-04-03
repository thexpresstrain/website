import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = styled.div`
  p,
  a {
    max-width: ${props => props.width};
    color: ${props => props.color};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.714285714285714;
    margin: ${props => props.margin};
    b {
      font-weight: 600;
      color: #013a51;
    }
  }
  a {
    text-decoration: none;
    &:hover {
      color: #a0a0b5;
    }
  }
  max-width: ${props => props.width};
  color: ${props => props.color};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.714285714285714;
  margin: ${props => props.margin};
  b {
    font-weight: 600;
    color: #013a51;
  }
`;

const Paragraph = ({ children, dark, nomargin, notop, nobottom, fluid }) => {
  //
  let color = '#696969';
  let margin = '1rem 0 2rem 0';
  let width = '26.5rem';

  if (dark) {
    color = '#ffffff';
  }

  if (nomargin) {
    margin = '0';
  }

  if (notop) {
    margin = '0 0 2rem 0';
  }

  if (nobottom) {
    margin = '1rem 0 0 0';
  }

  if (fluid) {
    width = '';
  }

  return (
    <>
      <Styles color={color} margin={margin} width={width}>
        {children}
      </Styles>
    </>
  );
};

export default Paragraph;

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  nomargin: PropTypes.bool,
  notop: PropTypes.bool,
  nobottom: PropTypes.bool,
  fluid: PropTypes.bool,
};

Paragraph.defaultProps = {
  dark: false,
  nomargin: false,
  notop: false,
  nobottom: false,
  fluid: false,
};
