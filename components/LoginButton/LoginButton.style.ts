import styled from "styled-components";
import { ButtonTheme } from "./LoginButton";

export const StyledLoginButton = styled.a`
  width: 130px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: ${(props) =>
    props.theme === ButtonTheme.Dark ? "white" : "black"};
  color: ${(props) => (props.theme === ButtonTheme.Dark ? "black" : "white")};
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px;
  appearance: none;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
