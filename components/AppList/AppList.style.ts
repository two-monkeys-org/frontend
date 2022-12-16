import styled, { keyframes } from "styled-components";
import { device } from "../../styles/variables";

export const StyledAppsList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px 30px;
  flex-wrap: wrap;
  @media ${device.tablet} {
    gap: 30px 5px;
  }
`;
