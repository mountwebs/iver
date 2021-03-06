import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Rectangle3 = ({ className }) => (
  <Svg
    width="128"
    height="134"
    viewBox="0 0 128 134"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M104.599 15.9334C110.423 16.954 115.238 21.0461 117.185 26.6287L146.982 112.065C151.079 123.815 141.04 135.642 128.781 133.506L49.6449 119.722C44.1474 118.764 39.5209 115.063 37.3803 109.91L1.40621 23.3067C-3.53269 11.417 6.60409 -1.23978 19.2856 0.982599L104.599 15.9334Z"
      fill="currentColor"
    />
  </Svg>
);

export default Rectangle3;
