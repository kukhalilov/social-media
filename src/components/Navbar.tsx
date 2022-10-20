import { Diversity2, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  MenuItem,
  Menu,
} from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  height: '30px',
  width: '40%',
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const inputbaseStyle = {
  input: {
    '&::placeholder': {
      color: 'gray',
      fontStyle: 'italic',
    },
  },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Diversity2 />
          <Typography variant="h5" sx={{ display: { xs: 'none', sm: 'block' } }}>
            SOCIAL
          </Typography>
        </Box>
        <Search>
          <InputBase placeholder="Search..." fullWidth sx={inputbaseStyle} />
        </Search>
        <IconsContainer>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: 'pointer' }}
            src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={() => setOpen(true)}
          />
        </IconsContainer>
        <UserContainer onClick={() => setOpen(true)} sx={{ cursor: 'pointer' }}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="h6">John</Typography>
        </UserContainer>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
