import SigninTemplate from "@/components/signin/SigninTemplate";
import {FormEvent, useState} from "react";

export interface SigninProps {
  psType: boolean
  onSubmit: (e: FormEvent<HTMLFormElement>) => void,
  psTypeHandler: React.MouseEventHandler<HTMLDivElement>
}

export default function Signin() {
  const [psType, setPsType] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
