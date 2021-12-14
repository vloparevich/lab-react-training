import React from 'react';

export default function BoxColor2(props) {
  const { r, g, b } = props;
  return (
    <div style={{ backgroundColor: `rgb(${r},${g}, ${b})` }}>
      <div style={{ color: '#fff' }}>
        R{r} G{g} B{b}
      </div>
    </div>
  );
}
