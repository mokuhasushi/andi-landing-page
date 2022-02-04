import React from "react";

// Styles
import { Wrapper, Input, Button, ButtonIcon } from "./InputField.styles";

// Images
import EmailSendIcon from "../../images/email-send-icon.svg";

const InputField = ({ callback }) => {
  return (
    <Wrapper>
      <Input placeholder="enter your email" />
      <Button onClick={callback}>
        <ButtonIcon src={EmailSendIcon} />
      </Button>
    </Wrapper>
  );
};

export default InputField;
