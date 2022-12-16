import styled, { keyframes } from "styled-components";
import { device, font } from "./variables";

const fadeIn = keyframes`
from {
  opacity:0;
  transform:scale(.97);
}

to {
  opacity:.99;
  transform:scale(1);
}
`;

export const StyledAppsListPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #111;
`;

export const StyledAppsListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  letter-spacing: 0.04em;
  opacity: 0;
  transform: scale(0.97);
  animation: ${fadeIn} 1.5s 0.3s ease forwards;
`;

export const StyledAppsListHeader = styled.div`
  font-size: ${font.sizeL};
  font-weight: bold;
  margin-bottom: 50px;

  @media${device.mobileM} {
    font-size: ${font.sizeM};
    margin: 30px 5px;
  }
`;
