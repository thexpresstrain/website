/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

function SvgLinkedIn(props) {
  return (
    <svg viewBox="0 0 40 40" {...props}>
      <g data-name="Layer 2">
        <g data-name="Layer 1" fillRule="evenodd">
          <path d="M0 40h40V0H0v40z" />
          <path
            d="M34.44 34.44h-5.93V24.33c0-2.77-1.05-4.32-3.25-4.32-2.39 0-3.63 1.62-3.63 4.32v10.11h-5.72V15.19h5.72v2.59a6.71 6.71 0 015.8-3.18c4.09 0 7 2.49 7 7.65zM9.08 12.66a3.55 3.55 0 113.53-3.55 3.53 3.53 0 01-3.53 3.55zM6.13 34.44h6V15.19h-6z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgLinkedIn;
