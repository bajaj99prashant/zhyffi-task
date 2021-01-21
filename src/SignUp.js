import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
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
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const [file, setFile] = useState(null);

  const ManageInput = (e, setInput, type) => {
    setError("");
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
    setError("");

    if (errorValidation()) {
      const formData = new FormData(e.target);
      formData.append("primary_img", file.image);

      fetch("http://localhost:5000/register", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.success === true) {
            navigate("/login");
          } else {
            setError(response.msg);
          }
        })
        .catch((err) => {
          console.log(err);
          setError("there was some error");
        });
    } else {
      setError("fill all the fields correctly");
    }
  };

  return (
    <LoginLayout>
      <h5 className="log-head">Sign Up</h5>
      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
      <form onSubmit={(e) => handleSignup(e)} encType="multipart/form-data">
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
          <label htmlFor="primary_img">Image</label>
          <input
            className="input-file"
            type="file"
            value={file ? file.name : null}
            onChange={handleFileInput}
          />
        </div>

        <p className="error-message">{error}</p>

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
