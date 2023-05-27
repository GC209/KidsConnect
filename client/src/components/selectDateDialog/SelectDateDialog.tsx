import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import {
  
  DatePickerDialog
} from '../styledComponents/CommonStyledComponents';

import SessionDatePicker from '../SessionDatePicker/SessionDatePicker';

export default function SelectDateDialog() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2023-06-02')
  const theme = useTheme();
  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = () => {
    navigate(`/session/${selectedDate}`);
  }

  return (
    <DatePickerDialog>
      <Button variant="outlined" onClick={handleClickOpen}>
        Select Date for session
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <SessionDatePicker handleDate={setSelectedDate} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSelect} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    
    </DatePickerDialog>
  );
}