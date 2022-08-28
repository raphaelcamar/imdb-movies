import styled from "styled-components";

export const StyledInput = styled.input`
  all: unset;
  border-radius: 8px;
  border: 1px solid #D0D5DD;
  transition: all ease .1s;
  height: 42px;

  &:hover {
    border: 1px solid #2E90FA;
  }

  &:focus {
    border: 1px solid #2E90FA;
    box-shadow: 0px 0px 0px 4px #B2DDFF;
  }
`

export const InputLabel = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;
`