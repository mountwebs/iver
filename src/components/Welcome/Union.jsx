import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Union = ({ className }) => (
  <Svg
    width="315"
    height="264"
    viewBox="0 0 315 264"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M263.043 224.33C262.232 220.89 264.923 217.69 268.456 217.599C329.262 216.029 375.298 195.412 384.722 160.241C398.901 107.322 324.827 41.4948 219.272 13.2114C113.717 -15.0719 16.6536 4.8992 2.47407 57.8181C-11.7055 110.737 62.3687 176.564 167.923 204.848C183.648 209.061 199.184 212.203 214.286 214.326C215.816 214.541 217.202 215.367 218.125 216.607C233.818 237.693 247.163 250.712 268.654 262.836C274.1 265.908 279.449 258.632 275.89 253.49C269.652 244.48 265.679 235.517 263.043 224.33Z"
    />
  </Svg>
);

export default Union;
