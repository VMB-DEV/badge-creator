import React, {useContext} from "react";
import {ColorsContext} from "../hook/Colors.jsx";
import {InputsContext} from "../hook/Inputs.jsx";
import {LogoType} from "../entities/Badge.js";

const Badge = () => {
  const {labelBGColor, logoBGColor, logoFGColor} = useContext(ColorsContext);
  const {style, logoType, b64Logo, classicLogo, labels} = useContext(InputsContext);
  const stylePart = "style=" + style;
  const logoBGColorPart = "&labelColor=" + logoBGColor;
  const logoColorPart = "&logoColor=" + logoFGColor;
  const b64Prefix = "data:image/svg%2bxml;base64,";
  let logoPart = "&logo=";
  logoPart += logoType === LogoType.normal ? classicLogo : b64Prefix + b64Logo ;
  const url = `https://shields.io/badge/${labels.join('-')}-${labelBGColor}.svg?${stylePart}${logoBGColorPart}${logoColorPart}${logoPart}`
  console.log("url", url);
  return ( <>
    <img
      src={url}
      alt={labels.join(" ")}
      style={{
        width: "200px",
      }}
    />
  </> );
}

export default Badge;