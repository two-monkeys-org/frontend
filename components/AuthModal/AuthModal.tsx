import { useDispatch } from "react-redux";
import { setAuthState } from "../../store/authSlice";
import { AuthState, AuthType } from "../../types/types";
import { Modal } from "../Modal";
import {
  StyledAuthentication,
  StyledAuthenticationHeader,
} from "./AuthModal.style";
import { LoginSection } from "./LoginSection";
import { RegisterSection } from "./RegisterSection";

export const AuthModal = ({ modalType }: { modalType: AuthType }) => {
  const dispatch = useDispatch();

  // const handleCloseModal = () => {
  //   const authState: AuthState = {
  //     shouldDisplayAuthModal: false,
  //   };
  //   dispatch(setAuthState(authState));
  // };

  return (
    // <Modal closeModal={handleCloseModal}>
    <Modal>
      <StyledAuthentication>
        <StyledAuthenticationHeader>
          <p>Welcome</p>
          <h2>
            {modalType === AuthType.Login
              ? "Log into your account"
              : "Create your new account"}
          </h2>
        </StyledAuthenticationHeader>
        {modalType === AuthType.Login ? <LoginSection /> : <RegisterSection />}
      </StyledAuthentication>
    </Modal>
  );
};
