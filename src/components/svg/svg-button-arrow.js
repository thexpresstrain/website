import React from 'react';

const SvgArrowButton = props => (
  <svg height="48px" viewBox="0 0 48 48" {...props}>
    <defs>
      <clipPath id="arrow_button_svg__a" transform="translate(-9 -6)">
        <path fill="none" d="M0 0h66v66H0z" />
      </clipPath>
    </defs>
    <g data-name="Layer 2">
      <g clipPath="url(#arrow_button_svg__a)" data-name="Layer 1">
        <path data-name="Path 503-2" d="M24 0A24 24 0 110 24 24 24 0 0124 0z" fill="#f5f5f5" />
        <path d="M38 20.21L28 13v4.82a15.45 15.45 0 00-14 15.34h4.93a10.5 10.5 0 019-10.39v4.63z" />
      </g>
    </g>
  </svg>
);

export default SvgArrowButton;
