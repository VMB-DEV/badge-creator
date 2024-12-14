import React, {createContext, useContext, useEffect, useRef, useState} from 'react'
import './App.css'
import MyColorPicker from "./components/MyColorPicker.jsx";
import Badge from "./components/Badge.jsx";
import ColorsProvider from "./hook/Colors.jsx";
import InputsProvider from "./hook/Inputs.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputsProvider>
        <ColorsProvider>
          {/*<SvgProvider>*/}
          {/*  <SvgInput />*/}
            <Result />
            <MyColorPicker />
          {/*</SvgProvider>*/}
        </ColorsProvider>
      </InputsProvider>
    </>
  )
}

export default App;

const SvgContext = createContext(null)

function SvgProvider({ children }) {
  const [svgInput, setSvgInput] = useState("")
  return (
    <SvgContext.Provider value={{
      svgInput,
      setSvgInput
    }}>
      {children}
    </SvgContext.Provider>
  );
}



function SvgInput() {
  const {setSvgInput} = useContext(SvgContext);

  const svgInputName = "svg-input";
  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      // setIsCopied(true);
      // Reset copied status after 2 seconds
      // setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    const svgInput = data.get(svgInputName);
    const b64 = btoa(svgInput);
    // handleCopy(b64);
    setSvgInput(b64);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name={svgInputName}/>
      <button type="submit">save</button>
    </form>
  );
}

function Result() {
  // const {svgInput} = useContext(SvgContext);
  // const prefix = "https://img.shields.io/badge/neovim-57A143.svg?logo=data:image/svg%2bxml;base64,";
  // const name = "debian"
  // const style = "style=flat";
  // const label = "&labelColor=171717";
  // const logoColor = "&logoColor=171717"
  // const logo = "&logo=";
  // const b64type = "data:image/svg%2bxml;base64,";
  // const b64 = "PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGViaWFuPC90aXRsZT48cGF0aCBmaWxsPSAiI0E4MUQzMyIgZD0iTTEzLjg4IDEyLjY4NWMtLjQgMCAuMDguMi42MDEuMjguMTQtLjEuMjctLjIyLjM5LS4zM2EzLjAwMSAzLjAwMSAwIDAxLS45OS4wNW0yLjE0LS41M2MuMjMtLjMzLjQtLjY5LjQ3LTEuMDYtLjA2LjI3LS4yLjUtLjMzLjczLS43NS40Ny0uMDctLjI3IDAtLjU2LS44IDEuMDEtLjExLjYtLjE0Ljg5bS43ODEtMi4wNWMuMDUtLjcyMS0uMTQtLjUwMS0uMi0uMjIxLjA3LjA0LjEzLjUuMi4yMk0xMi4zOC4zMWMuMi4wNC40NS4wNy40Mi4xMi4yMy0uMDUuMjgtLjEtLjQzLS4xMm0uNDMuMTJsLS4xNS4wMy4xNC0uMDFWLjQzbTYuNjMzIDkuOTQ0Yy4wMi42NC0uMi45NS0uMzggMS41bC0uMzUuMTgxYy0uMjguNTQuMDMuMzUtLjE3Ljc4LS40NC4zOS0xLjM0IDEuMjItMS42MiAxLjMwMS0uMjAxIDAgLjE0LS4yNS4xOS0uMzQtLjU5MS40LS40ODEuNi0xLjM3MS44NWwtLjAzLS4wNmMtMi4yMjEgMS4wNC01LjMwMy0xLjAyLTUuMjUzLTMuODQyLS4wMy4xNy0uMDcuMTMtLjEyLjJhMy41NTEgMy41NTIgMCAwMTIuMDAxLTMuNTAxIDMuMzYxIDMuMzYyIDAgMDEzLjczMi40OCAzLjM0MSAzLjM0MiAwIDAwLTIuNzIxLTEuM2MtMS4xOC4wMS0yLjI4MS43Ni0yLjY1MSAxLjU3LS42LjM4LS42NyAxLjQ3LS45MyAxLjY2MS0uMzYxIDIuNjAxLjY2IDMuNzIyIDIuMzggNS4wNDIuMjcuMTkuMDguMjEuMTIuMzVhNC43MDIgNC43MDIgMCAwMS0xLjUzLTEuMTZjLjIzLjMzLjQ3LjY2LjguOTEtLjU1LS4xOC0xLjI3LTEuMy0xLjQ4LTEuMzUuOTMgMS42NiAzLjc4IDIuOTIxIDUuMjYxIDIuM2E2LjIwMyA2LjIwMyAwIDAxLTIuMzMtLjI4Yy0uMzMtLjE2LS43Ny0uNTEtLjctLjU3YTUuODAyIDUuODAzIDAgMDA1LjkwMi0uODRjLjQ0LS4zNS45My0uOTQgMS4wNy0uOTUtLjIuMzIuMDQuMTYtLjEyLjQ0LjQ0LS43Mi0uMi0uMy40Ni0xLjI0bC4yNC4zM2MtLjA5LS42Ljc0LTEuMzIxLjY2LTIuMjYyLjE5LS4zLjIuMyAwIC45Ny4yOS0uNzQuMDgtLjg1LjE1LTEuNDYuMDguMi4xOC40Mi4yMy42My0uMTgtLjcuMi0xLjIuMjgtMS42LS4wOS0uMDUtLjI4LjMtLjMyLS41MyAwLS4zNy4xLS4yLjE0LS4yOC0uMDgtLjA1LS4yNi0uMzItLjM4LS44NjEuMDgtLjEzLjIyLjMzLjM0LjM0LS4wOC0uNDItLjItLjc1LS4yLTEuMDgtLjM0LS42OC0uMTIuMS0uNC0uMy0uMzQtMS4wOTEuMy0uMjUuMzQtLjc0LjU0Ljc3Ljg0IDEuOTYuOTgxIDIuNDYtLjEtLjYtLjI4LTEuMi0uNDktMS43Ni4xNi4wNy0uMjYtMS4yNDEuMjEtLjM3QTcuODIzIDcuODI0IDAgMDAxNy43MDIgMS42Yy4xOC4xNy40Mi4zOS4zMy40Mi0uNzUtLjQ1LS42Mi0uNDgtLjczLS42Ny0uNjEtLjI1LS42NS4wMi0xLjA2IDBDMTUuMDgyLjczIDE0Ljg2Mi44IDEzLjguNGwuMDUuMjNjLS43Ny0uMjUtLjkuMS0xLjczIDAtLjA1LS4wNC4yNy0uMTQuNTMtLjE4LS43NDEuMS0uNzAxLS4xNC0xLjQzMS4wMy4xNy0uMTMuMzYtLjIxLjU1LS4zMi0uNi4wNC0xLjQ0LjM1LTEuMTguMDdDOS42LjY4IDcuODQ3IDEuMyA2Ljg2NyAyLjIyTDYuODM4IDJjLS40NS41NC0xLjk2IDEuNjExLTIuMDggMi4zMTFsLS4xMzEuMDNjLS4yMy40LS4zOC44NS0uNTcgMS4yNjEtLjMuNTItLjQ1LjItLjQuMjgtLjYgMS4yMi0uOSAyLjI1MS0xLjE2IDMuMTAyLjE4LjI3IDAgMS42NS4wNyAyLjc2LS4zIDUuNDYzIDMuODQgMTAuNzc2IDguMzYzIDEyLjAwNi42Ny4yMyAxLjY1LjIzIDIuNDkuMjUtLjk5LS4yOC0xLjEyLS4xNS0yLjA4LS40OS0uNy0uMzItLjg1LS43LTEuMzQtMS4xM2wuMi4zNWMtLjk3MS0uMzQtLjU3LS40Mi0xLjM2MS0uNjdsLjIxLS4yN2MtLjMxLS4wMy0uODMtLjUzLS45Ny0uODFsLS4zNC4wMWMtLjQxLS41MDEtLjYzLS44NzEtLjYxLTEuMTYxbC0uMTExLjJjLS4xMy0uMjEtMS41Mi0xLjkwMS0uOC0xLjUxMS0uMTMtLjEyLS4zMS0uMi0uNS0uNTVsLjE0LS4xN2MtLjM1LS40NC0uNjQtMS4wMi0uNjItMS4yLjIuMjQuMzIuMy40NS4zMy0uODgtMi4xNzItLjkzLS4xMi0xLjYwMS0yLjIwMmwuMTUtLjAyYy0uMS0uMTYtLjE4LS4zNC0uMjYtLjUxbC4wNi0uNmMtLjYzLS43NC0uMTgtMy4xMDItLjA5LTQuNDAyLjA3LS41NC41My0xLjEuODgtMS45ODFsLS4yMS0uMDRjLjQtLjcxIDIuMzQxLTIuODcyIDMuMjQxLTIuNzYxLjQzLS41NS0uMDkgMC0uMTgtLjE0Ljk2LS45OTEgMS4yNi0uNyAxLjkwMS0uODguNy0uNDAxLS42LjE2LS4yNy0uMTUxIDEuMi0uMy44NS0uNyAyLjQyMS0uODUuMTYuMS0uMzkuMTQtLjUyLjI2IDEtLjQ5IDMuMTUxLS4zNyA0LjU2Mi4yNyAxLjYzLjc3IDMuNDYxIDMuMDExIDMuNTMxIDUuMTMybC4wOC4wMmMtLjA0Ljg1LjEzIDEuODIxLS4xNyAyLjcxMWwuMi0uNDJNOS41NCAxMy4yMzZsLS4wNS4yOGMuMjYuMzUuNDcuNzMuOCAxLjAxLS4yNC0uNDctLjQyLS42Ni0uNzUtMS4zbS42Mi0uMDJjLS4xNC0uMTUtLjIyLS4zNC0uMzEtLjUyLjA4LjMyLjI2LjYuNDMuODhsLS4xMi0uMzZtMTAuOTQ1LTIuMzgybC0uMDcuMTVjLS4xLjc2LS4zNCAxLjUxMS0uNjkgMi4yMTIuNC0uNzMuNjUtMS41NDEuNzUtMi4zNjJNMTIuNDUuMTJjLjI3LS4xLjY2LS4wNS45NS0uMTItLjM3LjAzLS43NC4wNS0xLjEuMWwuMTUuMDJNMy4wMDYgNS4xNDJjLjA3LjU3LS40My44LjExLjQyLjMtLjY2LS4xMS0uMTgtLjEtLjQybS0uNjQgMi42NjFjLjEyLS4zOS4xNS0uNjIuMi0uODQtLjM1LjQ0LS4xNy41My0uMi44MyIvPjwvc3ZnPg=="
  // const debLogo = logo + b64type + b64;
  // const url2 = `https://shields.io/badge/${name}-4E2ABB.svg?${style}${logoColor}${debLogo}`
  return (
    <>
      <Badge
        // logo={b64}
        // style="flat"
        // label="debian"
        // logoColor="171717"
        // labelColor="171717"
      />
      {/*<img src={url2} alt="Neovim2"/>*/}
    </>
  );
}

function Example() {
  return (
    <img
      src="https://img.shields.io/badge/neovim-57A143.svg?logo=data:image/svg%2bxml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TmVvdmltPC90aXRsZT48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMi4yMTQgNC45NTR2MTMuNjE1TDcuNjU1IDI0VjEwLjMxNEwzLjMxMiAzLjg0NSAyLjIxNCA0Ljk1NHptNC45OTkgMTcuOThsLTQuNTU3LTQuNTQ4VjUuMTM2bC41OS0uNTk2IDMuOTY3IDUuOTA4djEyLjQ4NXptMTQuNTczLTQuNDU3bC0uODYyLjkzNy00LjI0LTYuMzc2VjBsNS4wNjggNS4wOTIuMDM0IDEzLjM4NXpNNy40MzEuMDAxbDEyLjk5OCAxOS44MzUtMy42MzcgMy42MzdMMy43ODcgMy42ODMgNy40MyAweiIvPjwvc3ZnPgo="
      alt="Neovim"/>
  );
}