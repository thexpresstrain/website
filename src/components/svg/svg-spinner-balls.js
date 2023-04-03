import React from 'react';

const SvgSpinnerBall = props => (
  <svg
    className="spinner-ball_svg__lds-spin"
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={{
      background: '0 0',
    }}
    {...props}
  >
    <g transform="translate(80 50)">
      <circle r={10} fill="#0a6edd" transform="scale(1.03089)">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.875s"
          values="1.1 1.1;1 1"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          values="1;0"
          begin="-0.875s"
        />
      </circle>
    </g>
    <g transform="rotate(45 -50.355 121.569)">
      <circle r={10} fill="#0a6edd" fillOpacity={0.875} transform="scale(1.04339)">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.75s"
          values="1.1 1.1;1 1"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          values="1;0"
          begin="-0.75s"
        />
      </circle>
    </g>
    <g transform="rotate(90 -15 65)">
      <circle r={10} fill="#0a6edd" fillOpacity={0.75} transform="scale(1.05589)">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.625s"
          values="1.1 1.1;1 1"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          values="1;0"
          begin="-0.625s"
        />
      </circle>
    </g>
    <g transform="rotate(135 -.355 41.569)">
      <circle r={10} fill="#0a6edd" fillOpacity={0.625} transform="scale(1.06839)">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.5s"
          values="1.1 1.1;1 1"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          values="1;0"
          begin="-0.5s"
        />
      </circle>
    </g>
    <g transform="rotate(180 10 25)">
      <circle r={10} fill="#0a6edd" fillOpacity={0.5} transform="scale(1.08089)">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.375s"
          values="1.1 1.1;1 1"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          values="1;0"
          begin="-0.375s"
        />
      </circle>
    </g>
    <g transform="rotate(-135 20.355 8.431)">
      <circle r={10} fill="#0a6edd" fillOpacity={0.375} transform="scale(1.09339)">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.25s"
          values="1.1 1.1;1 1"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          values="1;0"
          begin="-0.25s"
        />
      </circle>
    </g>
    <g transform="rotate(-90 35 -15)">
      <circle r={10} fill="#0a6edd" fillOpacity={0.25} transform="scale(1.00589)">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.125s"
          values="1.1 1.1;1 1"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          values="1;0"
          begin="-0.125s"
        />
      </circle>
    </g>
    <g transform="rotate(-45 70.355 -71.569)">
      <circle r={10} fill="#0a6edd" fillOpacity={0.125} transform="scale(1.01839)">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="0s"
          values="1.1 1.1;1 1"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
          values="1;0"
          begin="0s"
        />
      </circle>
    </g>
  </svg>
);

export default SvgSpinnerBall;
