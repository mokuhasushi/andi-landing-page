import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: var(--maxWidth);
  padding: 50px 0;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
