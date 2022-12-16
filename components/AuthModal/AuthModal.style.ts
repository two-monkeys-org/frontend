import styled from "styled-components";
import { color, device, font } from "../../styles/variables";

export const StyledAuthentication = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  text-align: center;

  @media ${device.mobileL} {
    padding: 30px 20px;
  }

  label {
    display: block;
    margin-bottom: 2px;
    font-size: ${font.sizeXS};
  }

  input,
  button {
    height: 30px;
    border-radius: 5px;
    padding: 5px 10px;
    width: 100%;
    display: block;
    margin-bottom: 15px;
  }

  input {
    font-size: ${font.sizeXXS};
    border: 1px solid #444;
    outline: none;
    transition: 0.1s;
  }

  input:hover, input: focus {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledAuthenticationHeader = styled.div`
  width: 100%;
  padding-bottom: 20px;
  p {
    font-size: ${font.sizeXS};
    text-transform: uppercase;
    font-weight: bold;
    color: #444;
  }

  h2 {
    font-size: ${font.sizeM};
    margin-top: 5px;
  }
`;

export const StyledAuthButton = styled.button`
  background: ${color.darkBrown};
  color: white;
  border: 2px solid ${color.darkBrown};
  transition: 0.5;
  margin-top: 20px;
  &:hover {
    background: white;
    color: ${color.darkBrown};
  }
`;
