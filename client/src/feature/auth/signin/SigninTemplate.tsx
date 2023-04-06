import React from 'react';
import styled from '@emotion/styled';
import { SigninProps } from '@/pages/auth/signin';

export default function SigninTemplate(props: SigninProps) {
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
