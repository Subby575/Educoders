"use client"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
export default function TeacherList({para}) {

  console.log(para);
  let a=para.name.substr(1);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  >{a}</Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {para.name}
              </Typography>
              <br/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="blue"
              >
                Rating : {para.feedback}/10
              </Typography>
              <br/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body1"
                color="text.primary"
              >
                Available: {para.astart}:00 - {para.aend}:00
              </Typography>
            </React.Fragment>
          }
        />
         <Link href={`https://wa.me/${para.num}`}> <button className='p-2 text-white rounded-xl bg-blue-500'>Ask Now</button></Link>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
