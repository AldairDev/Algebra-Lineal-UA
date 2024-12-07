import React from 'react';
import { Drawer } from '@mui/material';

function Header() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 10,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box'},
      }}
    >
    </Drawer>
  );
}

export default Header;