import styled, { keyframes } from "styled-components";
import { device } from "../../styles/variables";

const fadeDownMonitorItems = keyframes`
  from {
    transform: translateY(-100vh);
  }

  to {
    transform: translateY(0);
  }
`;

const fadeDownHexagon = keyframes`
  from {
    transform: translateY(-100vh);
  }

  to {
    transform: translateY(0);
  }
`;

export const StyledHomeBannerContainer = styled.div`
  width: 100%;
  height: 100%;
  @media ${device.laptop} {
    transform: scale(0.7);
  }

  @media ${device.tablet} {
    transform: scale(0.5);
  }

  @media ${device.mobileS} {
    transform: scale(0.4);
  }
`;

export const StyledHomeBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledHexagonImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 512px;
  height: 512px;
  transform: translateY(-100vh);
  animation: ${fadeDownHexagon} 1.5s 0.3s ease forwards;
`;

export const StyledMonitorSection = styled.div`
  position: relative;
  top: 28%;
  left: 0;
  width: 400px;
  height: 400px;
  & > div {
    transform: translateY(-100vh);
    animation-name: ${fadeDownMonitorItems};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }
`;

export const StyledMonitorImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 350px;
  animation-delay: 0.8s !important;
`;

export const StyledBlogImage = styled.div`
  position: absolute;
  top: 60px;
  left: 50px;
  width: 120px;
  height: 120px;
  animation-delay: 0.9s !important;
`;

export const StyledChatImage = styled.div`
  position: absolute;
  bottom: 170px;
  right: 80px;
  width: 120px;
  height: 120px;
  animation-delay: 1s !important;
`;
