import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: var(--maxWidth);
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-flow: column;
    justify-content: center;
  }
`;
