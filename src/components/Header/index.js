import React from "react";

// Images
import AndiLogo from "../../images/logo_cropped.png";

// Styles
import { Wrapper, Content, LogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={AndiLogo} alt="andi-logo" />
    </Content>
  </Wrapper>
);

export default Header;
