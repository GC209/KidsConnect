import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

import { StyledLink, HorizontalSeparater, BtnContainer } from './App.styles';



function App() {
  const [date, setDate] = useState("2023-06-02");

  return (
    <>
      <h2>Home</h2>
      <HorizontalSeparater />
      
      
      <BtnContainer>
        <StyledLink to={`/session/${date}`}>Sessions Overview</StyledLink>
      </BtnContainer>

      <div className='tiles'>
        <StyledLink to={`/news`}>News Overview</StyledLink>
      </div>

      
      <Outlet />
    </>
  )
}

export default App
