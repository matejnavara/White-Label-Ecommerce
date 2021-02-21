import React from "react";
import PropTypes from "prop-types";

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

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormInput;
