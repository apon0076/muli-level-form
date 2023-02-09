import React from "react";

const Input = ({ label, type, setter, formValue, formPlaceholder }) => {
  return (
    <div className="input__section">
      <label>{label}</label>
      <input
        onChange={(e) => setter(e.target.value)}
        type={type}
        value={formValue}
        placeholder={formPlaceholder}
      />
    </div>
  );
};

export default Input;
