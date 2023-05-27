/*
The sessions overview page/component by default shows all the sessions available for a certain date.
//default date will be 2023-06-02
//There are two buttons: ‘Next day’ and ‘Previous day’. When clicked it will show the sessions for that date.
*/
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { getRequestedDay } from "../../custom/getRequestedDay";

import SessionGroupOptions from "../../components/sessionGroupOptions/SessionGroupOptions";
import SessionCard from "../../components/sessionCard/SessionCard";
import { StyledLink, HorizontalSeparater } from '../../components/styledComponents/CommonStyledComponents';

interface group{
  id: number;
  name: string;
}

interface session{
  id: number;
  day: string;
  start_time: string;
  end_time: string;
  product_name: string;
  child_id: number;
  group: group;
  presence: string;
}


const SessionOverview = (): React.JSX.Element => {
  const params = useParams();
  //console.log(params.sessionDate);
  
  //state to maintain the current selected datw
  const [currentDate, setCurrentDate] = useState<string| undefined>(params.sessionDate);
  
  //state to keep unique groups available on a specific day
  const [uniqueGroups, setUniqueGroups] = useState<string[]>([]);
  
  //state to maintain sessions for a specific day selected
  const [sessions, setSessions] = useState<session[]>([]);

  //state to keep the selected group from the options dropdown
  const [filteredGroup, setFilteredGroup] = useState('');

  
  
  //Side effect that runs on initial render and on any date change to fetch the sessions for a specific day
  useEffect(() => {
    axios.get(`http://localhost:3001/sessions?day=${currentDate}`).then(res => {
      setSessions(res.data);
    });
  }, [currentDate])
  
  //side effect that runs on change in sessions and currentDate to set the uniqueGroup and reset filtered group
  useEffect(() => {
    setUniqueGroups(() => [...new Set(sessions.map((elem => elem.group.name)))]);
    setFilteredGroup('');
  }, [sessions,currentDate])

  //event to set the current date based on the button clicked for previous or next date
  const handleDate = (e) => {
    e.preventDefault();
    setCurrentDate(() => getRequestedDay(currentDate && new Date(currentDate), e.currentTarget.name));
  }

  //event to set the selected group based on group selected in the Options dropdown
  const handleSelect = (value) => {
    if (value) {
      setFilteredGroup(value)
    }
  }
  
  return (
    <>
      <StyledLink to={`/`}>Home</StyledLink>
      <h2>Session Overview</h2>
      <HorizontalSeparater />
      <div className="container">
        <h3>Date : {currentDate}</h3>
        <Stack spacing={2} direction="row">
          <Button onClick={handleDate} name="prev" variant="contained">Previous Day</Button>
          <Button onClick={handleDate} name="next" variant="contained">Next Day</Button>
        </Stack>
      </div>
      
      <HorizontalSeparater />
      
      {uniqueGroups.length > 0 && <SessionGroupOptions groups={uniqueGroups} callback={handleSelect} />}

      {uniqueGroups.length > 0 && <HorizontalSeparater />}
      {!sessions.length && <h3>Sorry, no sessions available on the selected date</h3>}
      {!filteredGroup && sessions && sessions.map(session => <SessionCard key={session.id} session={session} />)}
      {filteredGroup && sessions && sessions.map(session => (session.group.name) === filteredGroup && <SessionCard key={session.id} session={session} />)}
      
    </>
  )
}

export default SessionOverview;