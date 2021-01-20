import React from "react";
import LoginBox from "./LoginBox";
import "./css/loginLayout.css";

function LoginLayout({ children }) {
  return (
    <div className="background">
      <div className="login-layout">
        <LoginBox />
        <div className="form-layout">
          <div className="form-content">
            <img src="icons/zifi.png" className="zifi-logo" alt="zhyffi-logo" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
