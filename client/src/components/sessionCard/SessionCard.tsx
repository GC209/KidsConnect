/*Component to show MUI card of session with details :
- The start and end times for this session.
- The name and avatar for the child
- The group name associated with that session
- The current presence status for that session
*/

import { useState } from 'react';
import { useQuery } from 'react-query';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import axios from 'axios';
import { StyledSessionCard } from '../styledComponents/CommonStyledComponents';
import { PUBLIC_URL } from '../../utils/Constants.js';
import { getButtonLabel } from '../../utils/getButtonLabel.js';


function SessionCard({ session}) {
  
  //set the presence status in local storage to make it persist
  if (!localStorage.getItem(`${session.id}`))
    localStorage.setItem(`${session.id}`, session.presence)
  
  //To maintain the state of the presence. Initially set to the presence value coming from the localstorage
  const [presence, setPresence] = useState(localStorage.getItem(`${session.id}`));
  
  //state to maintain the button label which changes on click of the button
  const [btnLabel, setBtnLabel] = useState(getButtonLabel(localStorage.getItem(`${session.id}`)));
  
  /*React-query and axios to get the children details */
  const { data, isError, error } = useQuery('child', () => {
    return axios.get(`${PUBLIC_URL}/children/`);
  })
  
  //To handle the error in response
  if (isError) {
    if (error instanceof Error) {
      return <h2>{error.message}</h2>
    }else {
      console.log('Unexpected error', error);
    }
  }

  /*filter to get the child details based on the child id recieved in the session*/
  const child = data?.data.filter(record => record.id === session.child_id)
  
  //function to change the status of the presence and btn label based on button clicked
  const handleClick = (e) => {
    e.preventDefault();
    if(btnLabel)
      localStorage.setItem(`${session.id}`, btnLabel);
    setPresence(btnLabel as string);
    
    
    setBtnLabel(getButtonLabel(btnLabel) as string);
  }

  return (
    <StyledSessionCard>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {session.product_name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Start Time : {session.start_time}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Start Time : {session.end_time}
          </Typography>
          
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Child name : {child && child[0].name}
          </Typography>
          
          <Avatar
            alt={child && child[0].name}
            src={child && child[0].avatar}
            sx={{ width: 56, height: 56 }}
          />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {session.group.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Presence : {presence}
          </Typography>
          <CardActions>
            <Button onClick={handleClick} size="small">Change status to { btnLabel}</Button>
          </CardActions>
        </CardContent>
      </Card>
    </StyledSessionCard>
  );
}

export default SessionCard;
