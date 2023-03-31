import React, { useState } from "react";
import LoginTemplate from "@/components/login/LoginTemplate";
import { LoginData, useAuth } from "@/components/login/hooks/useAuth";

export default function Login() {
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [psType, setPsType] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const data: LoginData = { email, password };
    auth.signin(data);
  };
  const psTypeHandler = () => {
    setPsType(!psType);
  };
  return (
    <LoginTemplate
      onSubmit={onSubmit}
      psType={psType}
      psTypeHandler={psTypeHandler}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}
