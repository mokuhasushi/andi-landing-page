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
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-flow: column;
  }
`;
export const MainTextContent = styled.div``;
export const ImgContent = styled.div``;
export const MainText = styled.div`
  font-size: var(--fontSuperBig);
`;
export const IphoneImg = styled.img`
  width: 333px;
  @media screen and (max-width: 500px) {
    width: 180px;
  }
`;
