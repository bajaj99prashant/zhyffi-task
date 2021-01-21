import { Link, navigate } from "@reach/router";
import React, { useState } from "react";
import FormInput from "./FormInput";
import { emailValidation } from "./formValidation";
import LoginLayout from "./LoginLayout";
import { useStateValue } from "./DataLayer";

function Login() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const [error, setError] = useState("");

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

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (emailValidation(email.value) === "OK" && email.error === "") {
      const data = {
        email: email.value,
        password: password.value,
      };

      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.success === true) {
            console.log("in login");
            const data = {
              email: email.value,
            };
            return fetch("http://localhost:5000/session", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
          } else {
            setError(response.msg);
          }
        })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          dispatch({
            type: "SESSION_CONFIRMED",
            name: response.name,
            email: response.email,
            img: response.img,
          });

          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          setError("There was some error.");
        });
    } else {
      setError("fill all the fields correctly");
    }
  };

  console.log("state", state);

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

        <p className="error-message">{error}</p>

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
