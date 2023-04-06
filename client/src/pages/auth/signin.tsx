import SigninTemplate from '@/feature/auth/signin/SigninTemplate';
import React, { FormEvent, SetStateAction, useState } from 'react';
import { useAuth } from '@/feature/auth/hooks/useAuth';
import { User } from '@/types/User';

export interface SigninProps {
  psType: boolean;
  psTypeHandler: React.MouseEventHandler<HTMLDivElement>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setPassword: React.Dispatch<SetStateAction<string>>;
  setEmail: React.Dispatch<SetStateAction<string>>;
}

export default function Signin() {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [psType, setPsType] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: User = { email, password };
    auth.signin(data);
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
