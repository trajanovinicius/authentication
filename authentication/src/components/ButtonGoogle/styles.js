import styled from "styled-components";
import { lighten } from "polished";

export const ButtonG = styled.button`
  background-color: #ffff;
  color: #7ab1f2;
  height: 35px;
  width: 15rem;
  border-radius: 10px;
  border: 1px solid #7ab1f2;

  margin-top: 1rem;

  font-family: "Poppins", sans-serif;

  &:hover {
    color: ${lighten(0.1, "black")};
  }

  img {
    width: 27px;
    height: 20px;
    margin-left: -40px;
    margin-right: 30px;
    vertical-align: text-bottom;
  }
`;
