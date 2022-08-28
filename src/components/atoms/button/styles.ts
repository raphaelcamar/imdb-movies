import styled from "styled-components";

export const StyledButton = styled.button`
  all: unset;
  height: 46px;
  background: #2E90FA;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  padding: 0 8px;
  text-align: center;
  box-sizing: border-box;
  
  &:hover {
    background: #1570EF;
  }

  &:focus {
    box-shadow: 0px 0px 0px 4px #B2DDFF;
  }
`