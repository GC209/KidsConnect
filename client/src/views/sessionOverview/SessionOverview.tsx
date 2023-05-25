//import { useQuery } from "react-query";
import axios from "axios";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

import { getRequestedDay } from "../../custom/getRequestedDay";
import BasicCard from "../../customMUIElements/card/BasicCard";
import SelectGroup from "../../customMUIElements/selectOptions/SelectGroup";
import { StyledLink, HorizontalSeparater } from '../../App.styles';

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
  const [currentDate, setCurrentDate] = useState<string>("2023-06-02");
  const [uniqueGroups, setUniqueGroups] = useState<string[]>([]);
  const [sessions, setSessions] = useState<session[]>([]);
  const [filteredGroup, setFilteredGroup] = useState('');

  
  useEffect(() => {
    axios.get('http://localhost:3001/sessions').then(res => {
      setSessions(res.data.filter(record => record.day === currentDate));
    });
  }, [currentDate])
  
  useEffect(() => {
    setUniqueGroups(() => [...new Set(sessions.map((elem => elem.group.name)))]);
    setFilteredGroup('');
  }, [sessions,currentDate])

  const handleDate = (e) => {
    e.preventDefault();
    setCurrentDate(() => getRequestedDay(new Date(currentDate), e.currentTarget.name));
  }

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
      
      {uniqueGroups.length && <SelectGroup groups={uniqueGroups} callback={handleSelect} />}
      <HorizontalSeparater />
      {!sessions.length && <h3>Sorry, no sessions available on the selected date</h3>}
      {!filteredGroup && sessions && sessions.map(session => <BasicCard key={session.id} session={session} />)}
      {filteredGroup && sessions && sessions.map(session => (session.group.name) === filteredGroup && <BasicCard key={session.id} session={session} />)}
      
    </>
  )
}

export default SessionOverview;