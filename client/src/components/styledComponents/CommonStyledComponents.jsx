//Common Styled component library

import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(25, 118, 210, 0.5);
  color: #1976d2;
  margin: 0 10px;
`;

export const HorizontalSeparater = styled.div`
  width: 100%;
  position: relative;
  height: 1px;
  background-color: #000;
  margin: 10px auto;
`
export const BtnContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const Heading3 = styled.h3`
  text-align: center;
`;
export const Paragraph1 = styled.p`
  text-align: justify;
  padding: 2px;
  min-height:60px
`;

export const DatePickerDialog = styled.div`
  text-align: center;
  margin: auto;
`

export const StyledSessionCard = styled.div`
  border: 1px solid;
  width: 500px;
  margin: 20px 10px;
`;