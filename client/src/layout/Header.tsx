import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '@/components/auth/hooks/useUser';
import { useEffect, useState } from 'react';
import { useAuth } from '@/components/auth/hooks/useAuth';

export default function Header() {
  const { pathname } = useRouter();

  const { user } = useUser();
  const { logout } = useAuth();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(() => true);
  }, []);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pathname.substring(1).toLocaleUpperCase()}
          </Typography>
          <Button color="inherit">
            <Link shallow={true} href={'/post'}>
              post
            </Link>
          </Button>
          <Button color="inherit">
            <Link shallow={true} href={'/post/write'}>
              write
            </Link>
          </Button>
          {mounted && user && (
            <Button onClick={logout} color="inherit">
              logout
            </Button>
          )}
          {mounted && !user && (
            <Button color="inherit">
              <Link shallow={true} href={'/auth/login'}>
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
