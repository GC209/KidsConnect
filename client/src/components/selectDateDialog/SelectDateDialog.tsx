/*
Card to show the Dialog when user clicks on "Select date for session" at the home page under Session tile.
MUI component is used for the Creating Dialog/Modal/Popup here
When clicked on confirm 
  - if no date is selected then "2023-06-02" is default selected date
  - otherwise user can choose the date from the datepicker
User then will be navigated to the the session of the selected date on click of confirm
On click of cancel user will be returnd to the previos home view
*/

import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { DatePickerDialog } from '../styledComponents/CommonStyledComponents';
import { DEFAULT_DATE } from '../../utils/Constants.js';

import SessionDatePicker from '../SessionDatePicker/SessionDatePicker';

export default function SelectDateDialog() {
  const [open, setOpen] = useState(false);
  
  //usestate to maintain state of the selected date
  const [selectedDate, setSelectedDate] = useState(DEFAULT_DATE);
  
  const theme = useTheme();
  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  //function to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  //function to close the Dialog
  const handleClose = () => {
    setOpen(false);
  };

  //function to redirect to the sessions page of the selected date
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