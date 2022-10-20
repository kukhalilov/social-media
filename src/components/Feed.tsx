import { Box } from '@mui/material';
import React from 'react';
import Post from './Post';
import data from '../data';

function Feed() {
  return (
    <Box
      flex={4}
      sx={{
        marginLeft: 0,
        padding: { xs: '0', md: '10px', lg: '18px' },
        paddingTop: '0',
      }}
    >
      {data.map(({ id, author, title, description, date, avatarImage, postImage }) => (
        <Post
          key={id}
          id={id}
          author={author}
          title={title}
          description={description}
          date={date}
          avatarImage={avatarImage}
          postImage={postImage}
        />
      ))}
    </Box>
  );
}

export default Feed;
