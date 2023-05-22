import React, { CSSProperties, useState } from 'react';
import ColorSelector from '../ColorSelector/ColorSelector';
import { ColorResult } from 'react-color';
import styleAddColorScheme from './AddColorScheme.module.css';

export default function AddColorScheme() {
  //   const [selectedColor, setSelectedColor] = useState<ColorResult>({
  //     hex: '#000000',
  //     hsl: { h: 0, s: 0, l: 0 },
  //     rgb: { r: 0, g: 0, b: 0 },
  //   });
  const [selectedColor, setSelectedColor] = useState('#000000');

  const colorStyle: CSSProperties = { color: selectedColor };

  return (
    <>
      {' '}
      <div>
        <p style={colorStyle}>Here's your color codes: {selectedColor} </p>
      </div>
      <div className={styleAddColorScheme.conteiner}>
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </>
  );
}
