import React, {useContext} from "react";

const Badge = ({
  logo,
  label,
  labelColor,
  style,
  logoColor,
               }) => {
  const stylePart = "style=" + style;
  const labelColorPart = "&labelColor=" + labelColor;
  const logoColorPart = "&logoColor=" + logoColor;
  const b64Prefix = "data:image/svg%2bxml;base64,";
  const logoPart = "&logo=" + b64Prefix + logo;
  const url = `https://shields.io/badge/${label}-${labelColor}.svg?${stylePart}${logoColorPart}${logoPart}`
  return ( <>
    <img src={url} alt={label}/>
  </> );
}

export default Badge;