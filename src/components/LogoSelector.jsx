import logoData from '../assets/logo_data.json'
import Select from "react-select";
import {useState} from "react";


const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '400px',
    borderRadius: '5px',
    bosShadow: 'none',
    textAlign: 'left',
  }),
  option: (provided, state) => ({
    ...provided,
    // color: state.isSelected ? "black" : "greay",
    // backgroundColor: state.isSelected ? "green" : "red",
    '&:hover': {
      backgroundColor: "green",  // Additional hover style if needed
      cursor: 'pointer'
    }
  }),
};

const LogoSelector = () => {
  const [optionPicked, setOptionPicked] = useState("");
  const logos = logoData.list;
  const options = logos.map((logo) => ({value: logo.input, label: logo.option}));
  console.log("%c render LogoSelector", "background: grey");

  return (
    <div style={{width: '300px'}}>
      <Select
        options={options}
        styles={customStyles}
        onChange={(option) => setOptionPicked()}
      />
    </div>
  );
}

export default LogoSelector;