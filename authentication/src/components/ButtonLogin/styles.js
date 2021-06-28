import styled from "styled-components";
import { lighten } from "polished";

export const Button = styled.button`
  background-color: #7ab1f2;
  height: 35px;
  width: 15rem;
  border-radius: 10px;

  border: none;
  margin-top: 2rem;

  font-family: "Poppins", sans-serif;

  &:hover {
    color: ${lighten(0.1, "#FFFF")};
  }
`;
