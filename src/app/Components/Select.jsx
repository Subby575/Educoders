import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Drawer from './Drawer';

export default function BSelect() {
  const [age, setAge] = React.useState('');
const chapters=[
    "Quadratic Equation",
    "Probability",
    "Trigonometry",
    "Electrostatics",
    "Kinematics",
    "Chemical Bonding",
    "Mole Concept"
]
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Chapters</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chapters}
          label="Chapter"
          onChange={handleChange}
        >
            {
                chapters.map((e)=>(
                    <MenuItem value={e}>{e}</MenuItem>
                ))
            }
         
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    <Drawer params={value}/>
    </Box>
    </>
  );
}
