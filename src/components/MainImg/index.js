import React from "react";

// Styles
import { Wrapper, Image } from "./MainImg.styles";

const MainImg = ({ image }) => (
  <Wrapper>
    <Image src={image} />
  </Wrapper>
);

export default MainImg;
