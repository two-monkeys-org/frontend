import { PasswordStrength } from "../../types/types";
import { StyledPasswordStrengthSection } from "./PasswordStrengthSection.style";

export const PasswordStrengthSection = ({
  type,
}: {
  type: PasswordStrength;
}) => {
  const obj = {
    weak: 1,
    medium: 2,
    strong: 3,
  };
  const strengthElements = () => {
    let elementsAmount = 0;
    switch (type) {
      case PasswordStrength.Weak:
        elementsAmount = 1;
        break;
      case PasswordStrength.Medium:
        elementsAmount = 2;
        break;
      case PasswordStrength.Strong:
        elementsAmount = 3;
        break;
    }

    const elements = [];
    for (let i = 0; i < 3; i++) {
      elements.push(<div></div>);
    }
    return elements;
  };

  // console.log(elementsAmount());
  // const strengthElements = elementsAmount().map(() => <div></div>);
  return (
    <StyledPasswordStrengthSection>
      {/* <div></div>
      <div></div>
      <div></div> */}
      {strengthElements()}
      {type}
    </StyledPasswordStrengthSection>
  );
};
