import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    & button {
      width: 100%;
    }

    & input {
      width: 100%;
    }
  }
`