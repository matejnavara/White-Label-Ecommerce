import React from "react";

import { GroupContainer, FormInputContainer, FormInputLabel } from "./styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer type="text" onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
