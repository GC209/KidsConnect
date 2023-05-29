/*
Compent for unique session available on a specific day
MUI component is used in this component customization
*/
import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SessionGroupOptions({ groups, callback}) {
  
  //state to maintain the group selected
  const [group, setGroup] = React.useState('');
  
  //sideEffect to trigger the callback based on the group dependency change
  useEffect(() => {
    callback(group);
  }, [group])

  //function to handle the group selected in the dropdown
  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as string);
    
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Groups</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={group}
          label="Group"
          onChange={handleChange}
        >{ groups.length>0 && <MenuItem key={0} value="All">All</MenuItem>}
          {
            
            groups.map((group, idx) => <MenuItem key={idx+1} value={group}>{group}</MenuItem>)
          }
          
        </Select>
      </FormControl>
    </Box>
  );
}