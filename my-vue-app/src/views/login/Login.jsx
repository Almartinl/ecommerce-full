import { useState, useEffect } from "react";
import "../../styles/Login.css";
import FormLogin from "../../component/formlogin/FormLogin";
import FormRegister from "../../component/formregister/FormRegister";

export default function Login() {
  document.title = "Login/Register";

  return (
    <div className="wrap main">
      <FormLogin />
      <FormRegister />
    </div>
  );
}
