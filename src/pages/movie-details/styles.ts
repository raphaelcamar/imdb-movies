
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Img = styled.img`
  border-radius: 12px;
`

export const HideImg = styled.div`
    @media (max-width: 780px) {
    display: none;
  }
`

export const StyledLink = styled(Link)`
  color: #2E90FA;
`