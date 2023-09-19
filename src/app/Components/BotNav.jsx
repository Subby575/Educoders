"use client"
import * as React from 'react';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import back from '@/../public/teacher.jpg'
import Image from 'next/image';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Link from 'next/link';
export default function ColorToggleButton() {
//   const [alignment, setAlignment] = React.useState('Student');
//  

const [color,setColor]=useState("text-indigo-400");
const [color1,setColor1]=useState("text-blue-400");
  const handleChange = (event, newAlignment) => {
    setColor1('text-red-500');
    setColor('text-red-500');
   };
  return (
    <ToggleButtonGroup
    //   color={color}
    //   value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <Link href="/Login/TeacherLogin"><ToggleButton className={color} 
       value="Teacher"
       onClick={()=>setColor('text-red-500')}
       ><Image href={back}/>
        Teachers Login</ToggleButton></Link>



      <Link href="/Login/StudentLogin"><ToggleButton value="Student"
      className={color1}
       onClick={()=>setColor1('text-red-500')}
      >Student's Login</ToggleButton></Link>
    </ToggleButtonGroup>
  );
}
