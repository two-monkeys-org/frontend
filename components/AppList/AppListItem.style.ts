import styled, { keyframes } from "styled-components";
import { device, font } from "../../styles/variables";

export const StyledAppsListItem = styled.div`
  width: 240px;
  height: 240px;

  @media ${device.tablet} {
    width: 160px;
    height: 160px;
  }

  &:hover {
    > div {
      opacity: 0.9 !important;
      border: 5px solid white;
    }
    h2 {
      color: white;

      // text-shadow: 0 0 1px 20px white;
    }
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.1s;

  @media ${device.tablet} {
    width: 120px;
    height: 120px;
  }
`;

export const StyledItemName = styled.h2`
  text-align: center;
  font-size: ${font.sizeS};
  margin-top: 15px;
  font-weight: 400;
  color: #888;
  letter-spacing: 0.04em;

  @media ${device.mobileL} {
    font-size: ${font.sizeXS};
  }
`;
