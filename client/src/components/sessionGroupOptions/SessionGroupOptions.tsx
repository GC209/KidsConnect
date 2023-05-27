/*Compent for unique session available on a specific day*/
import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SessionGroupOptions({ groups, callback}) {
  const [group, setGroup] = React.useState('');
  useEffect(() => {
    callback(group);
  }, [group])

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
        >{
            groups.map((group, idx) => <MenuItem key={ idx}  value={group}>{group}</MenuItem>)
          }
          
        </Select>
      </FormControl>
    </Box>
  );
}