import React from 'react';
import { HexColorPicker } from 'react-colorful';

export default function ColorSelector({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}) {
  return (
    <div className="App">
      <HexColorPicker color={selectedColor} onChange={setSelectedColor} />
      {/* 
      <div className="value" style={{ borderLeftColor: selectedColor }}>
        Current color is {selectedColor}
      </div>

      <div className="buttons">
        <button onClick={() => setSelectedColor('#c6ad23')}>Choose gold</button>
        <button onClick={() => setSelectedColor('#556b2f')}>
          Choose green
        </button>
        <button onClick={() => setSelectedColor('#207bd7')}>Choose blue</button>
      </div> */}
    </div>
  );
}

// import React from 'react';
// import {
//   ColorResult,
//   PhotoshopPicker,
//   // ChromePicker,
//   // SliderPicker,
//   // HuePicker,
//   // AlphaPicker,
//   // BlockPicker,
//   // CirclePicker,
//   // CompactPicker,
//   // GithubPicker,
//   // MaterialPicker,
//   // SketchPicker,
//   // SwatchesPicker,
//   // TwitterPicker,
// } from 'react-color';

// // import { HexColorPicker } from 'react-colorful';

// export default function ColorSelector({
//   selectedColor,
//   setSelectedColor,
// }: {
//   selectedColor: ColorResult;
//   setSelectedColor: React.Dispatch<React.SetStateAction<ColorResult>>;
// }) {
//   const handleChangeComplete = (color: ColorResult) => {
//     setSelectedColor(color);
//   };

//   return (
//     <div>
//       <PhotoshopPicker
//         color={selectedColor.hex}
//         onChangeComplete={handleChangeComplete}
//       />
//       {/* <SliderPicker
//         color={selectedColor.hex}
//         onChangeComplete={handleChangeComplete}
//       /> */}
//     </div>
//   );
// }
