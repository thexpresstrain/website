import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  position: relative;
  padding-left: 2.5rem;
  cursor: pointer;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  :checked ~ .checkmark {
    background: green;
  }
  :checked ~ .checkmark:after {
    display: block;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 24px;
  width: 24px;
  border: ${props => (props.isError ? '1px red solid' : '1px darkgrey solid')};
  background: white;
  :hover {
    background: #ccc;
  }
  ::after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const AsteriskStyle = styled.span`
  margin-left: 0.25rem;
`;

const ErrorStyle = styled.span`
  color: red;
`;

const Checkbox = ({
  labelNode,
  inputName,
  value,
  onChange,
  onFocus,
  errorText,
  asterisk,
  asteriskColor,
  asteriskSize,
  errorColor,
}) => {
  //

  // Asterisk SVG
  const Asterisk = (
    <svg height={asteriskSize} viewBox="0 0 120 100">
      <path
        d="M75.56,31.87c0,2.6,1.49,3.22,3.33,1.38L97.54,14.6a5.56,5.56,0,0,1,7.86,7.86L86.75,41.11c-1.84,1.84-1.22,3.33,1.38,3.33h26.38a5.56,5.56,0,0,1,0,11.12H88.13c-2.6,0-3.22,1.49-1.38,3.33L105.4,77.54a5.56,5.56,0,0,1-7.86,7.86L78.89,66.75c-1.84-1.84-3.33-1.22-3.33,1.38V94.51a5.56,5.56,0,0,1-11.12,0V68.13c0-2.6-1.49-3.22-3.33-1.38L42.46,85.4a5.56,5.56,0,0,1-7.86-7.86L53.25,58.89c1.84-1.84,1.22-3.33-1.38-3.33H25.49a5.56,5.56,0,0,1,0-11.12H51.87c2.6,0,3.22-1.49,1.38-3.33L34.6,22.46a5.56,5.56,0,0,1,7.86-7.86L61.11,33.25c1.84,1.84,3.33,1.22,3.33-1.38V5.49a5.56,5.56,0,0,1,11.12,0Z"
        fill={errorText ? errorColor : asteriskColor}
        fillRule="evenodd"
      />
    </svg>
  );

  return (
    <Wrapper>
      <Label htmlFor={inputName}>
        {errorText ? <ErrorStyle>{errorText}</ErrorStyle> : labelNode}
        <Input
          type="checkbox"
          name={inputName}
          id={inputName}
          value={value}
          errorText={errorText}
          onChange={onChange}
          onFocus={onFocus}
        />
        <Checkmark className="checkmark" isError={errorText} />
      </Label>
      <AsteriskStyle>{asterisk && !value ? <>{Asterisk}</> : ''}</AsteriskStyle>
    </Wrapper>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  asterisk: PropTypes.bool,
  asteriskSize: PropTypes.string,
  asteriskColor: PropTypes.string,
  errorColor: PropTypes.string,
  labelNode: PropTypes.node.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  errorText: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Checkbox.defaultProps = {
  asterisk: false,
  asteriskColor: '#000000',
  asteriskSize: '10px',
  errorColor: 'red',
  errorText: '',
  onChange: () => {
    return null;
  },
  onFocus: () => {
    return null;
  },
};
