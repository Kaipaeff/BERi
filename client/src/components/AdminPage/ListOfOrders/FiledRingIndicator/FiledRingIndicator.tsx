import React, { CSSProperties, useState } from 'react';
import { ColorResult } from 'react-color';

export default function FiledRingIndicator({
  colorCode,
}: {
  colorCode: string;
}) {
  const [selectedColor, setSelectedColor] = useState<ColorResult>({
    hex: colorCode,
    hsl: { h: 0, s: 0, l: 0 },
    rgb: { r: 0, g: 0, b: 0 },
  });

  const backgroundStyle: CSSProperties = {
    width: '20px',
    height: '20px',
    border: '1px',
    borderColor: 'black',
    borderRadius: '50%',
    background: selectedColor.hex,
  };
  return <div style={backgroundStyle}>{''}</div>;
}
