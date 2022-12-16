import { HomeBanner } from "../components/HomeBanner";
import {
  StyledHomePage,
  StyledHomeInfoSection,
  StyledButtonsWrapper,
  StyledHomeBannerSection,
} from "../styles/index.style";
import Typewriter from "typewriter-effect";
import { LoginButton } from "../components/LoginButton";

import { ButtonTheme, ButtonType } from "../components/LoginButton/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthModalState, setAuthState } from "../store/authSlice";
import { AuthType, AuthState } from "../types/types";

const HomePage = () => {
  // const dispatch = useDispatch();

  // const handleAuth = (authType: AuthType) => {
  //   const authState: AuthState = {
  //     shouldDisplayAuthModal: true,
  //     authType: authType,
  //   };
  //   dispatch(setAuthState(authState));
  // };

  return (
    <StyledHomePage>
      <StyledHomeInfoSection>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Welcome to 2 monkeys app!").start();
            }}
          />
        </h1>
        <p>
          Place for people to chat together and let their friends know what's
          up!
        </p>
        <StyledButtonsWrapper>
          <LoginButton
            buttonTheme={ButtonTheme.Dark}
            buttonType={ButtonType.Login}
          />
          <LoginButton
            buttonTheme={ButtonTheme.Light}
            buttonType={ButtonType.Register}
          />
        </StyledButtonsWrapper>
      </StyledHomeInfoSection>
      <StyledHomeBannerSection>
        <HomeBanner />
      </StyledHomeBannerSection>
    </StyledHomePage>
  );
};

export default HomePage;
