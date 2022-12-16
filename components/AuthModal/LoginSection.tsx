import {
  StyledLoginForm,
  StyledForgotPassword,
  StyledPasswordField,
} from "./LoginSection.style";
import { StyledAuthButton } from "./AuthModal.style";
import Link from "next/link";

export const LoginSection = () => {
  const handleForgotPassword = () => {
    console.log("forgot!");
  };

  return (
    <StyledLoginForm>
      <label htmlFor="email">Email</label>
      <input id="email" placeholder="Insert email" type="email" />
      <label htmlFor="password">Password</label>
      <StyledPasswordField>
        <input id="password" placeholder="Insert password" type="password" />
        <StyledForgotPassword onClick={handleForgotPassword}>
          Forgot password?
        </StyledForgotPassword>
      </StyledPasswordField>
      <StyledAuthButton>
        <Link href="/apps">LOG IN</Link>
      </StyledAuthButton>
    </StyledLoginForm>
  );
};
