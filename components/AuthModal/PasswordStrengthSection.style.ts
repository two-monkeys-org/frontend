import styled from "styled-components";
import { font } from "../../styles/variables";

export const StyledPasswordStrengthSection = styled.div`
  div {
    width: 33%;
    height: 5px;

    background: black;
  }
  div:nth-child(1) {
    background: red;
  }
  font-size: ${font.sizeXXS};
`;
