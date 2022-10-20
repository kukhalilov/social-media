import { Box, createTheme, Stack, PaletteMode, ThemeProvider } from '@mui/material';
import Add from 'components/Add';
import Feed from 'components/Feed';
import Navbar from 'components/Navbar';
import Righbar from 'components/Righbar';
import Sidebar from 'components/Sidebar';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between" sx={{ spacing: { xs: 0, sm: 5 } }}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Righbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
