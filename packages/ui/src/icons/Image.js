import React from "react";

export default ({ fill, ...rest }) => (
  <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" {...rest}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Desktop-HD"
        transform="translate(-979.000000, -378.000000)"
        stroke={fill}
      >
        <rect
          id="Rectangle"
          x="981.5"
          y="380.5"
          width="15"
          height="15"
          rx="2"
        />
        <polygon
          id="Path-2"
          fill={fill}
          points="983.777758 392.75 986.212664 389.5 988.405377 392 991.093538 388.5 994.196671 392.75"
        />
      </g>
    </g>
  </svg>
);
