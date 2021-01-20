import React from "react";
import "./css/formInput.css";

const FormInput = ({ children, name, type, changeMe, value, error }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>
        {children}
        <input
          className={error ? "error" : null}
          name={name}
          type={type}
          value={value}
          onChange={changeMe}
        />
      </label>
      <p className="error-message">{error}</p>
    </div>
  );
};

export default FormInput;
