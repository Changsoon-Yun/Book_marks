import React from "react";
import styled from "@emotion/styled";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Flexbox from "@/components/common/Flexbox";

export default function Login() {
  return (
    <Main>
      <StFormGroup>
        <Typography variant="h3" component="h2">
          Login
        </Typography>
        <Typography variant="subtitle1" pb={2} component="h2">
          Welcome Back! Please enter your details.
        </Typography>
        <TextField
          id="outlined-basic"
          required
          label="아이디"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          required
          label="비밀번호"
          variant="outlined"
        />
        <Flexbox justify={"space-between"} align={"center"}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="자동 로그인"
          />
          <StLink href={"/find/account"}>아이디, 비밀번호 찾기</StLink>
        </Flexbox>
      </StFormGroup>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

const StFormGroup = styled(FormGroup)`
  padding: 15px;
  gap: 20px;
`;

const StLink = styled(Link)`
  display: inline-block;
  color: black;
  margin-left: auto;
`;
