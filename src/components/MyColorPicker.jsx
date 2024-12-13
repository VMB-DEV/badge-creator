import React, {useState} from "react";
import {HexColorPicker} from "react-colorful";

const MyColorPicker = (updateColor) => {
  const [color, setColor] = useState("#FFFFFF");
  const [visible, setVisible] = useState(false);
  const handleColorChange = (color) => {
    console.log(color);
    setColor(color);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#505050",
      position: "absolute",
      width: "250px",
    }}>
      <button
        style={{
          height: "40px",
          width: "40px",
          backgroundColor: color,
          marginTop: "3px",
          marginBottom: "15px",
          boxShadow: '0 0 0 3px white',
        }}
        onClick={() => setVisible(prev => !prev)}
      />
      {visible && <>
        <HexColorPicker
          color={color}
          onChange={handleColorChange}
          style={{width:'100%'}}
        />
        <input
          value={color}
          onChange={(e) => (handleColorChange(e.target.value))}
          style={{ width: '60px', marginTop: '5px'}}
        />
      </> }
    </div>

  );
}

export default MyColorPicker;