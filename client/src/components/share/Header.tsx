import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pathname.substring(1).toLocaleUpperCase()}
          </Typography>
          <Button color="inherit">
            <Link href={"/login"}>Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
