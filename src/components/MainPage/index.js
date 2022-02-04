import React from "react";

// Images
import IphoneImg1 from "../../images/iphone-red.png";

// Styles
import {
  Wrapper,
  Content,
  MainTextContent,
  ImgContent,
  MainText,
  IphoneImg,
} from "./MainPage.styles";

const MainPage = () => {
  return (
    <Wrapper>
      <Content>
        <MainTextContent>
          <MainText>Shop like never before</MainText>
        </MainTextContent>
        <ImgContent>
          <IphoneImg src={IphoneImg1} />
        </ImgContent>
      </Content>
    </Wrapper>
  );
};

export default MainPage;
