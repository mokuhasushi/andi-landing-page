import React from "react";

// Styles
import { Wrapper, Content } from "./Container.styles";

// Components
import MainImg from "../MainImg";
import MainText from "../MainText";

const Container = ({ image }) => {
  return (
    <Wrapper>
      <Content>
        <MainText />
        <MainImg image={image} />
      </Content>
    </Wrapper>
  );
};

export default Container;
