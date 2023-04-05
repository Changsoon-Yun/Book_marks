'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/components/auth/hooks/useUser';
import { useAuth } from '@/components/auth/hooks/useAuth';
import { useEffect, useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem, Typography } from '@mui/material';

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  // console.log(user);
  const { logout } = useAuth();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-controls="menu-appbar"
            size="large"
            edge="start"
            color="inherit"
            onClick={handleMenu2}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl2}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl2)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose2}>
              <Link href={'/auth/login'}>Login</Link>
            </MenuItem>
            <MenuItem onClick={handleClose2}>
              <Link href={'/post'}>Post</Link>
            </MenuItem>
            {mounted && user && (
              <MenuItem onClick={handleClose2}>
                <Link href={'/post/write'}>Write</Link>
              </MenuItem>
            )}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pathname}
          </Typography>
          {mounted && user && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="auth-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="auth-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Links = ({ href, text }: { href: string; text: string }) => {
  return (
    <Box sx={{ padding: '10px' }}>
      <Link href={href}>{text}</Link>
    </Box>
  );
};
