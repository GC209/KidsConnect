//Base component with link to the overview pages
import { Outlet } from 'react-router-dom';
import {
  StyledLink,
  HorizontalSeparater,
  BtnContainer,
  Heading3,
  Paragraph1,
} from './components/styledComponents/CommonStyledComponents';
import SelectDateDialog from './components/selectDateDialog/SelectDateDialog';
import { DEFAULT_DATE } from './utils/Constants.js';
import './App.css';


function App() {
  return (
    <>
      <h2>Home</h2>
      <HorizontalSeparater />
        <StyledLink to={`/session/${DEFAULT_DATE}`}>Sessions</StyledLink>
        <StyledLink to={`/news`}>News</StyledLink>
      <HorizontalSeparater />
      <div className='tileContainer'>
        <div className='tile'>
          <Heading3>Sessions</Heading3>
          <Paragraph1>To check the available sessions please click on the below button and select a date and press confirm</Paragraph1>
          <SelectDateDialog />
        </div>
        <div className='tile'>
          <Heading3>News</Heading3>
          <Paragraph1>Click the button to visit the New Overview section</Paragraph1>
          <BtnContainer>
            <StyledLink to={`/news`}>News Overview</StyledLink>
          </BtnContainer>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default App
