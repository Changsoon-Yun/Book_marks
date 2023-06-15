import { DefaultNamespace } from 'next-i18next';
import React, { FormEvent } from 'react';

export interface EmailProp {
  emailRef: React.RefObject<HTMLInputElement>;
}

export interface AuthProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  pwWatch: boolean;
  setPwWatch: { toggle: () => void };
  userNameRef: React.RefObject<HTMLInputElement>;
  pwRef: React.RefObject<HTMLInputElement>;
}

export interface ConfirmPassword {
  pwConfirmWatch: boolean;
  pwConfirmRef: React.RefObject<HTMLInputElement>;
  setPwConfirmWatch: { toggle: () => void };
}

export interface InputFormProps {
  id: string;
  label: DefaultNamespace;
  inputRef: React.RefObject<HTMLInputElement>;
  inputType: boolean | 'text';
  isRequired: boolean;
  setInputType?: { toggle: () => void };
}

export interface FindProps extends EmailProp {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
