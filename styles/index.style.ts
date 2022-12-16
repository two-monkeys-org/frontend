import styled from "styled-components";
import { device, font } from "./variables";

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 5% 10vh;
  width: 100vw;
  height: 100vh;
  background-image: url("../static/background.jpeg");
  background-size: cover;
  background-position: bottom;
  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobileM} {
    background-size: 150% 120vh;
    background-position: 100% 30%;
  }
`;

export const StyledHomeInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  padding: 0 30px 80px 0;
  width: 70%;
  @media ${device.tablet} {
    width: 100%;
    order: 2;
    padding: 0 10px 0;
  }

  h1 {
    color: white;
    font-size: ${font.sizeXXL};
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    @media ${device.laptop} {
      font-size: ${font.sizeXL};
    }
    @media ${device.mobileL} {
      font-size: ${font.sizeL};
    }

    @media ${device.mobileM} {
      font-size: max(30px, ${font.sizeM});
    }
  }
  p {
    margin: 0 auto;
    margin-top: 10px;
    color: black;
    font-size: ${font.sizeM};
    max-width: 60%;
    @media ${device.laptop} {
      font-size: ${font.sizeS};
    }
    @media ${device.mobileL} {
      font-size: ${font.sizeXS};
    }
    @media ${device.mobileM} {
      font-size: ${font.sizeXXS};
    }
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 300px;
  align-self: center;
  @media ${device.mobileM} {
    margin-top: 20px;
  }
`;

export const StyledHomeBannerSection = styled.div`
  width: 512px;
  height: 512px;
  align-self: center;

  @media ${device.tablet} {
    width: 100%;
    order: 1;
    margin: -15vh 0 -20vh;
  }

  @media ${device.mobileS} {
    margin: -25vh 0 -25vh;
  }
`;
