import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: var(--pink);
  width: var(--buttonWidth);
  height: var(--buttonHeight);
  border-radius: 35px;
  border: none;
  font-size: 26px;

  @media screen and (max-width: 500px) {
    width: var(--buttonWidthMobile);
    margin: 0 10px 0 10px;
  }
`;
