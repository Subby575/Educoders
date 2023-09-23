"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Drawer from './Drawer';

const chapters=[
    "Quadratic Equation",
    "Probability",
    "Trigonometry",
    "Electrostatics",
    "Kinematics",
    "Chemical Bonding",
    "Mole Concept"
]

export default function Try() {
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
    const x=value;
  return (
    <>
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div> */}
      {/* <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        //   const x=setInputValue();
        }}
        id="controllable-states-demo"
        options={chapters}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Chapters" />}
      />
    </div>
    <Drawer  params={value}/>
    </>
  );
}
