import styled from "styled-components";

export const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const StyledModal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(90vw, 400px);
  min-height: 100px;
  background: white;
  border-radius: 10px;
  border: 5px solid black;
  z-index: 99;
`;

export const StyledCloseIconContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
    svg {
      transition: 0.2s;
      fill: #888;
    }
  }
`;
