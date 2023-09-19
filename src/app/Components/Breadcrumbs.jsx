import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function Bcrumb({params}) {
    // console.log(params)
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Educoders
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/notes"
        >
          Notes
        </Link>
        <Typography color="text.primary">{params}</Typography>
      </Breadcrumbs>
    </div>
  );
}
