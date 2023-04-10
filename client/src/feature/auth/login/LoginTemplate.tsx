import { LoginProps } from '@/pages/auth/login';
import styled from '@emotion/styled';
import React from 'react';
import { Button, Input } from '@chakra-ui/react';

export default function LoginTemplate(props: LoginProps) {
  const { onSubmit, psType, psTypeHandler, setEmail, setPassword } = props;

  return (
    <Main>
      <form onSubmit={onSubmit}>
        <Input placeholder={'id'} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder={'password'} onChange={(e) => setPassword(e.target.value)} />
        <Button type={'submit'}>로그인</Button>
      </form>
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
