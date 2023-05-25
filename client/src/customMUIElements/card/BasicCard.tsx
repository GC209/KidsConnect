import { useState } from 'react';
import { useQuery } from 'react-query';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import axios from 'axios';


function BasicCard({ session}) {
  
  const [presence, setPresence] = useState(session.presence);
  const [btnLabel, setBtnLabel] = useState('present');
  const { data, isError, error } = useQuery('child', () => {
    return axios.get('http://localhost:3001/children/')
  })
  
  if (isError) {
    if (error instanceof Error) {
      return <h2>{error.message}</h2>
    }else {
      console.log('Unexpected error', error);
    }
  }
  const child = data?.data.filter(record => record.id === session.child_id)
  
  const handleClick = (e) => {
    e.preventDefault();
    setPresence(btnLabel);
    if (btnLabel === 'unknown') {
      setBtnLabel('present');
    } else if (btnLabel === 'present') {
      setBtnLabel('picked up');
    } else if (btnLabel === 'picked up') {
      setBtnLabel('unknown')
    }
  }

  return (
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
  );
}

export default BasicCard;
