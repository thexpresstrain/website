import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = styled.p`
  color: ${props => props.color};
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.333333333333333;
  margin: ${props => props.margin};
  text-align: center;
`;

const Title = ({ children, margin, light, dark1, dark2 }) => {
  let color = '';
  let xmargin = '1rem 0 2rem 0';

  if (light) {
    color = '#013a51';
  }
  if (dark1) {
    color = '#ffffff';
  }
  if (dark2) {
    color = '#00C282';
  }
  if (margin) {
    xmargin = margin;
  }
  return (
    <>
      <Styles margin={xmargin} color={color}>
        {children}
      </Styles>
    </>
  );
};

export default Title;

Title.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
  light: PropTypes.bool,
  dark1: PropTypes.bool,
  dark2: PropTypes.bool,
};

Title.defaultProps = {
  margin: '',
  light: false,
  dark1: false,
  dark2: false,
};
