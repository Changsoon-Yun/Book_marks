import React, { useState } from "react";
import { LoginTemplate } from "@/template/index";

export default function Login() {
  const [psType, setPsType] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  const psTypeHandler = () => {
    setPsType(!psType);
  };
  return (
    <LoginTemplate
      onSubmit={onSubmit}
      psType={psType}
      psTypeHandler={psTypeHandler}
    />
  );
}
