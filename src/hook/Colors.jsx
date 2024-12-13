import {createContext, useState} from "react";

export const ColorsContext = createContext(null)
// export default ColorsContext;

const ColorsProvider = ({children}) => {
  const [logoFGColor, setLogoFGColor] = useState("505050")
  const [logoBGColor, setLogoBGColor] = useState("101010")
  const [labelBGColor, setLabelBGColor] = useState("5050b0")

  return (
    <ColorsContext.Provider value={{
      logoFGColor,
      setLogoFGColor,
      logoBGColor,
      setLogoBGColor,
      labelBGColor,
      setLabelBGColor
    }}>
      {children}
    </ColorsContext.Provider>
  );
}

export default ColorsProvider;