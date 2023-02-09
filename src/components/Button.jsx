import React from "react";

const Button = ({ label, setFormStatus, formStatus, isDisabled }) => {
  return (
    <button
      onClick={() =>
        label === "Previous"
          ? setFormStatus(formStatus - 1)
          : setFormStatus(formStatus + 1)
      }
      className="form-btn"
      type="button"
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
