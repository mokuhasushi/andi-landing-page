import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--green);
  width: var(--buttonWidth);
  height: var(--buttonHeight);
  border-radius: 35px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: var(--buttonWidthMobile);
    padding: 10px 10px 10px 10px;
    margin: 0 10px 0 10px;
  }
`;

export const Content = styled.div`
  font-size: var(--fontBig);
  text-align: center;
`;
