import React, {FormEvent, SetStateAction, useState} from "react";
import LoginTemplate from "@/components/auth/login/LoginTemplate";
import {User, useAuth} from "@/components/auth/hooks/useAuth";
import {useQuery} from "react-query";
import {axiosInstance} from "@/axios";

export interface LoginProps {
  psType: Boolean,
  psTypeHandler: React.MouseEventHandler<HTMLDivElement>
  onSubmit: (e: FormEvent<HTMLFormElement>) => void,
  setPassword: React.Dispatch<SetStateAction<string>>,
  setEmail: React.Dispatch<SetStateAction<string>>
}

export default function Login() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [psType, setPsType] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: User = {email, password};
    auth.login(data);
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
