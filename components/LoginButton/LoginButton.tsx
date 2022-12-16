import Link from "next/link";
import { StyledLoginButton } from "./LoginButton.style";

export enum ButtonType {
  Login = "login",
  Register = "register",
}

export enum ButtonTheme {
  Light = "light",
  Dark = "dark",
}

export interface LoginButtonProps {
  buttonType: ButtonType;
  buttonTheme: ButtonTheme;
}

export const LoginButton = ({ buttonType, buttonTheme }: LoginButtonProps) => {
  const buttonText = (() => {
    switch (buttonType) {
      case ButtonType.Login:
        return "LOGIN";
      case ButtonType.Register:
        return "REGISTER";
    }
  })();

  const buttonLink = buttonType === ButtonType.Login ? "/login" : "/register";

  return (
    <Link href={buttonLink}>
      <StyledLoginButton theme={buttonTheme}>{buttonText}</StyledLoginButton>
    </Link>
  );
};
