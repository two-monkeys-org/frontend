import styled from "styled-components";
import { font } from "../../styles/variables";

export const StyledRegisterForm = styled.div`
  width: 100%;
  text-align: left;
  #confirm-password {
    margin-bottom: 5px;
  }
`;

export const StyledPasswordCheck = styled.div`
  height: 30px;
`;

export const StyledPasswordInfo = styled.div`
  font-size: ${font.sizeXXXS};
  color: red;
`;
