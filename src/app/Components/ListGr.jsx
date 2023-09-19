import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';

export default function GutterlessList({ param }) {
    const styles={
        status:{
            color: 1<0 ? "red":"blue"
        }
    }
    console.log(param[0]);
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {param.map((value) => (
                <ListItem
                    key={value}
                    disableGutters
                    secondaryAction={
                        <IconButton aria-label="comment">
                            <CommentIcon />
                        </IconButton>
                    }
                >
            

                   <Link href={`/notes/${value}`}> <ListItemText style={styles.status} primary={value} /></Link>
                    



                </ListItem>
            ))}
        </List>
    );
}
