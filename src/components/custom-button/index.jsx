import React from "react";

import { CustomButtonContainer } from "./styles";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
