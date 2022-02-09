import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Union2 = ({ className }) => (
  <svg
    width="278"
    height="207"
    viewBox="0 0 278 207"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M224.832 98.6753C220.812 97.7443 220.168 91.5975 223.905 89.8474C251.61 76.8722 268.317 60.012 266.63 43.2268C263.576 12.8509 201.44 -5.77689 127.845 1.6206C54.2493 9.01808 -2.93646 39.6395 0.11679 70.0155C1.83603 87.1197 22.2882 100.499 52.971 107.604C56.9912 108.535 57.6351 114.682 53.898 116.432C26.1929 129.407 9.48631 146.268 11.1735 163.053C14.2267 193.429 76.3628 212.057 149.958 204.659C223.554 197.262 280.74 166.64 277.686 136.264C275.967 119.16 255.515 105.781 224.832 98.6753Z"
    />
  </svg>
);

export default Union2;
