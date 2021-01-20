import React, { useState } from "react";
import { Link } from "@reach/router";
import LoginLayout from "./LoginLayout";
import FormInput from "./FormInput";
import { emailValidation } from "./formValidation";

function SignUp() {
  const [name, setName] = useState({
    value: "",
    error: "",
  });
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  // eslint-disable-next-line
  const [file, setFile] = useState(null);

  const ManageInput = (e, setInput, type) => {
    if (type === "email" && emailValidation(e.target.value) !== "OK") {
      setInput({ value: e.target.vale, error: "fill your email properly" });
    } else if (e.target.value !== "") {
      setInput({ value: e.target.value, error: "" });
    } else {
      setInput({ value: "", error: `${type} field should not be empty` });
    }
  };

  const errorValidation = () => {
    if (
      emailValidation(email.value) === "OK" &&
      name.value !== "" &&
      password.value !== "" &&
      file !== null
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFileInput = (e) => {
    setFile({ image: e.target.files[0] });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (errorValidation()) {
      const data = {
        name: name.value.split(" ").join(""),
        email: email.value,
        password: password.value,
        primary_img: file.image,
      };

      console.log(data);

      fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
    }
  };

  return (
    <LoginLayout>
      <h5 className="log-head">Sign Up</h5>
      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
      <form onSubmit={(e) => handleSignup(e)}>
        <FormInput
          name="name"
          type="name"
          value={name.value}
          error={name.error}
          changeMe={(e) => ManageInput(e, setName, "name")}
        >
          Name
        </FormInput>
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

        <div className="form-input">
          <label htmlFor="image">Image</label>
          <input
            className="input-file"
            type="file"
            value={file ? file.name : null}
            onChange={handleFileInput}
          />
        </div>

        <button
          type="submit"
          disabled={
            name.value === "" || email.value === "" || password.value === ""
          }
        >
          SignUp
        </button>
      </form>
    </LoginLayout>
  );
}

export default SignUp;
