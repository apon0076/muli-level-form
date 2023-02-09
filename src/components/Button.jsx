import React from "react";

const Button = ({ label, handleBtnClick, isDisabled, addressIndex }) => {
  return (
    <button
      onClick={() => handleBtnClick(label, addressIndex)}
      className="form-btn"
      type="button"
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
