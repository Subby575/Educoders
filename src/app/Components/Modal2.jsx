import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Student } from '../lib/data';
import { Divider } from '@mui/material';
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

export default function ModalShow1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button  onClick={handleOpen}>Student List</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Students performance
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ul>
            <h1 className='text-xl'>Well-Performed</h1>
            <Divider/>
            {
                Student.map((e)=>(
                    
                    <li key={e} className='bg-green-300'>{e.level>500?e.name:''}</li>
                    
                ))

            }
            </ul>
            <form class="m-3 flex w-full max-w-md gap-2 sm:mb-5">
        <input placeholder="Assignment Link" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

        <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Submit</button>
      </form>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ul>
            <h1 className='text-xl'>Under Performed</h1>
            <Divider/>
            {
                Student.map((e)=>(
                    
                    <li key={e} className='bg-red-300'>{e.level<500?e.name:''}</li>
                    
                ))

            }
            </ul>
            <form class="m-3 flex w-full max-w-md gap-2 sm:mb-5">
        <input placeholder="Assignment Link" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

        <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Submit</button>
      </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
