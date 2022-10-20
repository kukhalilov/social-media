import {
  Tooltip,
  Fab,
  Box,
  Modal,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from '@mui/material';
import React, { useState } from 'react';
import {
  Add as AddIcon,
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
  Image,
  DateRange,
} from '@mui/icons-material';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '20px',
});

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', sm: 30 } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create a new post
          </Typography>
          <UserContainer>
            <Typography variant="h6">John</Typography>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </UserContainer>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={3}
            variant="standard"
            placeholder="What is on your mind?"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
