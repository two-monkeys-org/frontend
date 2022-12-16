import { useEffect, useState } from "react";
import {
  StyledRegisterForm,
  StyledPasswordCheck,
  StyledPasswordInfo,
} from "./RegisterSection.style";
import { StyledAuthButton } from "./AuthModal.style";
import Link from "next/link";
import { PasswordStrengthSection } from "./PasswordStrengthSection";
import { PasswordStrength } from "../../types/types";
import {
  MEDIUM_PASSWORD_REGEXP,
  STRONG_PASSWORD_REGEXP,
} from "../../constants/constants";

export const RegisterSection = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordInfo, setPasswordInfo] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(
    PasswordStrength.Weak
  );

  useEffect(() => {
    if (password && password !== confirmPassword) {
      setPasswordInfo("Passwords don't match");
    } else setPasswordInfo("");

    if (STRONG_PASSWORD_REGEXP.test(password)) {
      setPasswordStrength(PasswordStrength.Strong);
    } else if (MEDIUM_PASSWORD_REGEXP.test(password)) {
      setPasswordStrength(PasswordStrength.Medium);
    } else {
      setPasswordStrength(PasswordStrength.Weak);
    }
  }, [password, confirmPassword]);

  return (
    <StyledRegisterForm>
      <label htmlFor="name">Name</label>
      <input id="name" placeholder="Insert name" type="text" />
      <label htmlFor="surname">Surname</label>
      <input id="surname" placeholder="Insert surname" type="text" />
      <label htmlFor="email">Email</label>
      <input id="email" placeholder="Insert email" type="email" />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        placeholder="Insert password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirm-password">Confirm assword</label>
      <input
        id="confirm-password"
        placeholder="Confirm password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <StyledPasswordCheck>
        {password && <StyledPasswordInfo>{passwordInfo}</StyledPasswordInfo>}
        {password && <PasswordStrengthSection type={passwordStrength} />}
      </StyledPasswordCheck>
      <StyledAuthButton>
        <Link href="/apps">CREATE ACCOUNT</Link>
      </StyledAuthButton>
    </StyledRegisterForm>
  );
};
