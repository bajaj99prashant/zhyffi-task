import { Link } from "@reach/router";
import React, { useState } from "react";
import FormInput from "./FormInput";
import { emailValidation } from "./formValidation";
import LoginLayout from "./LoginLayout";

function Login() {
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });

  const ManageInput = (e, setInput, type) => {
    if (type === "email" && emailValidation(e.target.value) !== "OK") {
      setInput({ value: e.target.vale, error: "fill your email properly" });
    } else if (e.target.value !== "") {
      setInput({ value: e.target.value, error: "" });
    } else {
      setInput({ value: "", error: `${type} field should not be empty` });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <LoginLayout>
      <h5 className="log-head">Log In</h5>
      <p>
        New to this site? <Link to="/register">Sign Up</Link>
      </p>
      <form onSubmit={(e) => handleLogin(e)}>
        <FormInput
          name="email"
          type="email"
          value={email.value}
          error={email.error}
          changeMe={(e) => ManageInput(e, setEmail, "email")}
        >
          Email
        </FormInput>
        <FormInput
          name="password"
          type="password"
          value={password.value}
          error={password.error}
          changeMe={(e) => ManageInput(e, setPassword, "password")}
        >
          Password
        </FormInput>

        <button
          type="submit"
          disabled={email.value === "" || password.value === ""}
        >
          Login
        </button>
      </form>
    </LoginLayout>
  );
}

export default Login;
