import { CloseIcon } from "../SvgIcons";
import {
  StyledModal,
  StyledModalBackground,
  StyledCloseIconContainer,
} from "./Modal.style";

export const Modal = ({
  closeModal,
  children,
}: {
  closeModal?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <StyledModalBackground>
      <StyledModal>
        {closeModal && (
          <StyledCloseIconContainer onClick={closeModal}>
            <CloseIcon />
          </StyledCloseIconContainer>
        )}
        {children}
      </StyledModal>
    </StyledModalBackground>
  );
};
