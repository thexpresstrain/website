import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  input {
    border: ${props => `1px ${props.errorText ? props.errorBorderColor : props.defaultBorderColor} solid`};
    outline: none;
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
    ::placeholder {
      color: grey;
    }
  }

  label {
    display: flex;
    margin-bottom: 0.5rem;
    color: ${props => (props.errorText ? props.errorBorderColor : '#000000')};
  }
`;

const AsteriskStyle = styled.span`
  margin-left: 0.25rem;
`;

const StyledInput = ({
  labelText,
  labelClasses,
  inputName,
  inputClasses,
  value,
  type,
  errorText,
  placeholder,
  asterisk,
  asteriskSize,
  asteriskColor,
  errorBorderColor,
  defaultBorderColor,
  min,
  autocomplete,
  onChange,
  onFocus,
  onBlur,
  onInput,
}) => {
  //

  // Asterisk SVG
  const Asterisk = (
    <svg height={asteriskSize} viewBox="0 0 120 100">
      <path
        d="M75.56,31.87c0,2.6,1.49,3.22,3.33,1.38L97.54,14.6a5.56,5.56,0,0,1,7.86,7.86L86.75,41.11c-1.84,1.84-1.22,3.33,1.38,3.33h26.38a5.56,5.56,0,0,1,0,11.12H88.13c-2.6,0-3.22,1.49-1.38,3.33L105.4,77.54a5.56,5.56,0,0,1-7.86,7.86L78.89,66.75c-1.84-1.84-3.33-1.22-3.33,1.38V94.51a5.56,5.56,0,0,1-11.12,0V68.13c0-2.6-1.49-3.22-3.33-1.38L42.46,85.4a5.56,5.56,0,0,1-7.86-7.86L53.25,58.89c1.84-1.84,1.22-3.33-1.38-3.33H25.49a5.56,5.56,0,0,1,0-11.12H51.87c2.6,0,3.22-1.49,1.38-3.33L34.6,22.46a5.56,5.56,0,0,1,7.86-7.86L61.11,33.25c1.84,1.84,3.33,1.22,3.33-1.38V5.49a5.56,5.56,0,0,1,11.12,0Z"
        fill={errorText ? errorBorderColor : asteriskColor}
        fillRule="evenodd"
      />
    </svg>
  );

  return (
    <Wrapper errorText={errorText} errorBorderColor={errorBorderColor} defaultBorderColor={defaultBorderColor}>
      <label htmlFor={inputName} className={labelClasses}>
        {errorText || labelText}
        <AsteriskStyle>{asterisk && !value ? <>{Asterisk}</> : ''}</AsteriskStyle>
      </label>
      <input
        name={inputName}
        type={type}
        id={inputName}
        value={value}
        min={min}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onInput={onInput}
        className={inputClasses}
      />
    </Wrapper>
  );
};

export default StyledInput;

StyledInput.propTypes = {
  labelClasses: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputClasses: PropTypes.string,
  type: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  errorText: PropTypes.string,
  errorBorderColor: PropTypes.string,
  defaultBorderColor: PropTypes.string,
  placeholder: PropTypes.string,
  asterisk: PropTypes.bool,
  asteriskSize: PropTypes.string,
  asteriskColor: PropTypes.string,
  min: PropTypes.number,
  autocomplete: PropTypes.oneOf(['on', 'off']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onInput: PropTypes.func,
};

StyledInput.defaultProps = {
  labelClasses: '',
  inputClasses: '',
  type: 'text',
  errorText: '',
  placeholder: '',
  asterisk: false,
  asteriskColor: '#000000',
  asteriskSize: '10px',
  errorBorderColor: 'red',
  defaultBorderColor: 'darkgrey',
  min: 0,
  autocomplete: 'off',
  onChange: () => {
    return null;
  },
  onFocus: () => {
    return null;
  },
  onBlur: () => {
    return null;
  },
  onInput: () => {
    return null;
  },
};
