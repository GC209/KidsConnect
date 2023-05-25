import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid #000;
    padding: 5px 10px;
    margin: auto 20px;
    border-radius: 5px;
    color: #fff;
    background: #000;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
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
    float: left;
`;