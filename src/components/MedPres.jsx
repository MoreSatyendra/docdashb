import React from 'react'
import Prescription from '../scenes/prescription/prescription'
import '../scenes/prescription/prescription.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
const MedPres = () => {
  return (
    <>
    <div className="w-[30%] h-[90%] flex flex-col text-gray-900 padStyle">
      {/* Patient History */}
      Write Prescription
      <Prescription/>
    </div>
    <div className="w-[30%] h-[90%] flex flex-col text-gray-900 labStyle">
      {/* Patient History */}
      Write Lab Test
      <Prescription/>
    </div>
    <div className='absolute bottom-8 left-[600px]' >
      <Button  variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
    </>
  )
}
export default MedPres