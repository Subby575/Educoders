import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Student } from '../lib/data';
import { Divider } from '@mui/material';
import Students from './Students';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalShow3() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Group</Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='h-500 w-500'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Students performance
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ul>
            <h1 className='text-xl'>Well-Performed</h1>
            <Divider/>
            {
                Student.map((e)=>(
                    
                    <li className='bg-green-300'>{e.level>500?e.name:''}</li>
                    
                ))

            }
            </ul>
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ul>
            <h1 className='text-xl'>Under Performed</h1>
            <Divider/>
               <Students/>

        
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
