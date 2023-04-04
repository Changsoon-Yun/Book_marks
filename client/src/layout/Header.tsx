import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { axiosInstance } from "@/lib/axios";
import { useUser } from "@/components/auth/hooks/useUser";
import { useEffect } from "react";
import { getCookie } from "@/lib/cookie/cookie";
import { useAuth } from "@/components/auth/hooks/useAuth";

export default function Header() {
  const { pathname } = useRouter();

  const { user } = useUser();
  const { logout } = useAuth();

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
            <Link shallow={true} href={"/post"}>
              post
            </Link>
          </Button>
          <Button color="inherit">
            <Link shallow={true} href={"/post/write"}>
              write
            </Link>
          </Button>
          {user ? (
            <Button color="inherit">
              <Link onClick={logout} shallow={true} href={"/auth/login"}>
                logout
              </Link>
            </Button>
          ) : (
            <Button color="inherit">
              <Link shallow={true} href={"/auth/login"}>
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
