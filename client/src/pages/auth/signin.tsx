import SigninTemplate from "@/components/auth/signin/SigninTemplate";
import React, {FormEvent, SetStateAction, useState} from "react";
import {useAuth, User} from "@/components/auth/hooks/useAuth";

export interface SigninProps {
  psType: Boolean,
  psTypeHandler: React.MouseEventHandler<HTMLDivElement>
  onSubmit: (e: FormEvent<HTMLFormElement>) => void,
  setPassword: React.Dispatch<SetStateAction<string>>,
  setEmail: React.Dispatch<SetStateAction<string>>
}

export default function Signin() {

  const auth = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [psType, setPsType] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: User = {email, password};
    auth.signin(data)
    console.log("hello");
  };
  const psTypeHandler = () => {
    setPsType(!psType);
  };
  return (
    <SigninTemplate
      onSubmit={onSubmit}
      psType={psType}
      psTypeHandler={psTypeHandler}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}
