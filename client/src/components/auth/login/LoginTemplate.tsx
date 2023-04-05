import React from 'react';
import styled from '@emotion/styled';
import { Button, Checkbox, FormControlLabel, FormGroup, InputAdornment, TextField, Typography } from '@mui/material';
import Flexbox from '@/components/common/Flexbox';
import Link from 'next/link';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginProps } from '@/pages/auth/login';

export default function LoginTemplate(props: LoginProps) {
  const { onSubmit, psType, psTypeHandler, setEmail, setPassword } = props;

  return (
    <Main>
      <form onSubmit={onSubmit}>
        <FormGroup sx={{ gap: '20px' }}>
          <Typography variant="h3" component="h2">
            Login
          </Typography>
          <Typography variant="subtitle1" pb={2} component="h2">
            Welcome Back! Please
            <br /> enter your details.
          </Typography>
          <TextField
            size={'small'}
            id={'email'}
            label="ID"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            size={'small'}
            id={'password'}
            label="Password"
            type={psType ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment onClick={psTypeHandler} position="end" sx={{ cursor: 'pointer' }}>
                  {psType ? <Visibility /> : <VisibilityOff />}
                </InputAdornment>
              ),
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Flexbox justify={'space-between'} align={'center'}>
            <FormControlLabel control={<Checkbox />} sx={{ fontSize: '14px' }} label="Auto Login" />
          </Flexbox>
          <Button type={'submit'} variant={'contained'}>
            login
          </Button>
          <Button
            type={'submit'}
            sx={{ borderColor: '#aaa', color: '#000' }}
            variant={'outlined'}
            startIcon={<Google />}
          >
            Sign in With Google
          </Button>
          <Typography textAlign={'center'} fontSize={'14px'}>
            Don&apos;t have account?
            <Link href={'/auth/signin'}>
              <Typography
                sx={{
                  marginLeft: '5px',
                  color: 'primary.main',
                  fontSize: '14px',
                }}
                component="span"
              >
                Sign Up
              </Typography>
            </Link>
          </Typography>
        </FormGroup>
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
