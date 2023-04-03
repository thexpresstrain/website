/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

function SvgGoogleMapPin(props) {
  return (
    <svg viewBox="0 0 37.5 50.01" {...props}>
      <g data-name="Layer 2">
        <path
          d="M18.75 0A18.77 18.77 0 000 18.75c0 10.07 17.26 30.06 18 30.91a1 1 0 00.75.35 1 1 0 00.76-.35c.73-.85 18-20.84 18-30.91A18.77 18.77 0 0018.75 0zm9.32 18.75a9.33 9.33 0 01-9.23 9.32h-.09a9.32 9.32 0 01-.08-18.64 9.42 9.42 0 016.61 2.67 9.25 9.25 0 012.79 6.56z"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

export default SvgGoogleMapPin;
