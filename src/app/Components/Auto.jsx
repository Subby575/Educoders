import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Chapters}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select Chapter" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const Chapters=[
    "Kinematics",
    "NLM",
    "Waves",
    "Oscillations"
]