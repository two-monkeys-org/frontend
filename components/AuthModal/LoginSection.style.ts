import styled from "styled-components";
import { font } from "../../styles/variables";

export const StyledLoginForm = styled.div`
  width: 100%;
  text-align: left;
`;

export const StyledPasswordField = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
  }
`;

export const StyledForgotPassword = styled.div`
  position: absolute;
  padding-bottom: 3px;
  display: block;
  bottom: 100%;
  right: 0;
  font-size: ${font.sizeXXXS};
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
