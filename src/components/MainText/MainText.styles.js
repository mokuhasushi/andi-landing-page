import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  font-size: var(--fontSuperBig);
  height: 80%;

  p {
    text-align: center;
    margin: 20px 20px;
    min-height: 100px;
  }
`;
