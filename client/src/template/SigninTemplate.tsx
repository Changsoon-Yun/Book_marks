import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { Google, Visibility, VisibilityOff } from "@mui/icons-material";

export default function SigninTemplate(props) {
  const { onSubmit, psType, psTypeHandler } = props;

  return (
    <Main>
      <form onSubmit={onSubmit}>
        <FormGroup sx={{ gap: "20px" }}>
          <Typography variant="h4" component="h2">
            Sign in
          </Typography>
          <Typography variant="subtitle1" pb={2} component="h2">
            Welcome to Creative
          </Typography>
          <TextField
            size={"small"}
            id="outlined-basic"
            label="ID"
            variant="outlined"
          />
          <TextField
            size={"small"}
            id="outlined-basic"
            label="Password"
            type={psType ? "text" : "password"}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  onClick={psTypeHandler}
                  position="end"
                  sx={{ cursor: "pointer" }}
                >
                  {psType ? <Visibility /> : <VisibilityOff />}
                </InputAdornment>
              ),
            }}
          />
          <Button type={"submit"} variant={"contained"}>
            Submit
          </Button>
          <Button
            type={"submit"}
            sx={{ borderColor: "#aaa", color: "#000" }}
            variant={"outlined"}
            startIcon={<Google />}
          >
            Sign in With Google
          </Button>
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
