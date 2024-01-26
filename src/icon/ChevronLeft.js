import React from 'react';
import { Svg, Path, G } from 'react-native-svg';

const ChevronLeft = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 42 39" fill="none">
      <G id="chevron-left">
        <Path
          id="Vector"
          d="M26.1974 29.1929L15.9474 19.6929L26.1974 10.1929"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default ChevronLeft;
