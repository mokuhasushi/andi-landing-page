import styled from "styled-components";

export const Wrapper = styled.div`
  width: var(--buttonWidth);
  height: var(--buttonHeight);
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    /* width: 90%; */
  }
`;

export const Input = styled.input`
  color: var(--midGrey);
  font-size: var(--fontMed);
  width: 100%;
  height: var(--buttonHeight);
  text-align: center;
  letter-spacing: 0;
  border: solid;
  border-radius: 35px;
  padding-right: 50px;
  float: left;

  @media screen and (max-width: 500px) {
    width: var(--buttonWidthMobile);
    font-size: var(--fontSmall);
    margin: 0 10px 0 10px;
  }
`;

export const Button = styled.button`
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  width: 70px;
  height: var(--buttonHeight);
  /* margin-bottom: 15px; */
  /* padding-bottom: -15px; */
  /* padding-top: 15px; */
  margin-left: -70px;
  border: solid;

  @media screen and (max-width: 500px) {
    /* margin-right: 20px; */
    margin-left: -80px;
    /* padding-top: 11px; */
  }
`;

export const ButtonIcon = styled.img`
  width: 32px;

  @media screen and (max-width: 500px) {
    width: 28px;
  }
`;
