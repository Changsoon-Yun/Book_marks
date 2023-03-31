import SigninTemplate from "@/components/signin/SigninTemplate";
import { useState } from "react";

export default function Signin() {
  const [psType, setPsType] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  const psTypeHandler = () => {
    setPsType(!psType);
  };
  return (
    <SigninTemplate
      psType={psType}
      onSubmit={onSubmit}
      psTypeHandler={psTypeHandler}
    />
  );
}
