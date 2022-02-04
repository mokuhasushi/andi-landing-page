import React, { useState } from "react";

// Styles
import { Wrapper, Content } from "./MainText.styles";

// Components
import Button from "../Button";
import InputField from "../InputField";
import SuccessText from "../SuccessText";

const MainText = () => {
  // const [state, setState] = useState("success");
  // const [state, setState] = useState("insert-input");
  const [state, setState] = useState("get-access");

  const currentComponent = () => {
    if (state === "get-access") {
      return (
        <Button
          text="Get early access"
          callback={() => setState("insert-input")}
        />
      );
    }
    if (state === "insert-input") {
      return <InputField callback={() => setState("success")} />;
    }
    if (state === "success") {
      return <SuccessText />;
    }
  };

  return (
    <Wrapper>
      <Content>
        <p>Shop like never before</p>
        {currentComponent()}
      </Content>
    </Wrapper>
  );
};

export default MainText;
