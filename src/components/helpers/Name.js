import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = styled.p`
  color: ${props => props.color};
  font-family: 'Poppins';
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  margin: ${props => props.margin};
  b {
    font-weight: 600;
    color: #013a51;
  }
`;

const Name = ({ children, dark, nomargin, notop, nobottom, margin, color }) => {
  //
  let xcolor = '#696969';
  let xmargin = '1rem 0 2rem 0';

  if (margin) {
    xmargin = margin;
  }

  if (color) {
    xcolor = color;
  }

  if (dark) {
    xcolor = '#ffffff';
  }

  if (nomargin) {
    xmargin = '0';
  }

  if (notop) {
    xmargin = '0 0 2rem 0';
  }

  if (nobottom) {
    xmargin = '1rem 0 0 0';
  }

  return (
    <>
      <Styles color={xcolor} margin={xmargin}>
        {children}
      </Styles>
    </>
  );
};

export default Name;

Name.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  nomargin: PropTypes.bool,
  notop: PropTypes.bool,
  nobottom: PropTypes.bool,
  margin: PropTypes.string,
  color: PropTypes.string,
};

Name.defaultProps = {
  dark: false,
  nomargin: false,
  notop: false,
  nobottom: false,
  margin: '',
  color: '',
};
