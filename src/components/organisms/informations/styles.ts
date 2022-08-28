import styled from "styled-components"


export const WrapperInformations = styled.div`
background-color: white;
padding: 24px;
border-radius: 12px;
width: 100%;
display: flex;
flex-direction: column;
gap: 24px;
`

export const MovieTitle = styled.h1`
font-size: 22px;
color: #4A4A4A;
font-weight: bold;
`

export const MovieDescription = styled.p`
font-size: 14px;
color: #98A2B3;
font-weight: 400;
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

& > div {
  width: 90%;
}
`