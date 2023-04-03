/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';

function SvgClock(props) {
  return (
    <svg viewBox="0 0 40 40" {...props}>
      <g data-name="Layer 2">
        <path
          d="M20 36.62A16.62 16.62 0 1136.62 20 16.62 16.62 0 0120 36.62M20 0A20 20 0 110 20 20 20 0 0120 0zm0 6.76a1.69 1.69 0 00-1.69 1.69V20a1.74 1.74 0 00.49 1.22l8.2 8.14a1.68 1.68 0 001.19.5A1.7 1.7 0 0029.36 27l-7.67-7.66V8.45A1.69 1.69 0 0020 6.76z"
          fillRule="evenodd"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

export default SvgClock;
