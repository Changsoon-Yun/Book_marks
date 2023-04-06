import React from 'react';
import styled from '@emotion/styled';
import { LoginProps } from '@/pages/auth/login';

export default function LoginTemplate(props: LoginProps) {
  const { onSubmit, psType, psTypeHandler, setEmail, setPassword } = props;

  return (
    <Main>
      <form onSubmit={onSubmit}></form>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
