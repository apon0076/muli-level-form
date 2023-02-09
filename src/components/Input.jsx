import React from "react";

const Input = ({
  label,
  type,
  formValue,
  handleChange,
  formPlaceholder,
  addressIndex,
}) => {
  return (
    <div className="input__section">
      <label>{label}</label>
      <input
        onChange={(e) => handleChange(e.target.value, label, addressIndex)}
        type={type}
        value={formValue}
        placeholder={formPlaceholder}
      />
    </div>
  );
};

export default Input;
