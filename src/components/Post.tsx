import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

type PostPropsType = {
  id: number;
  author: string;
  title: string;
  description: string;
  date: string;
  avatarImage: string;
  postImage: string;
};

function Post({ author, title, description, date, avatarImage, postImage }: PostPropsType) {
  return (
    <div>
      <Card sx={{ margin: { xs: 1, sm: 2, md: 3, lg: 5 } }}>
        <CardHeader
          avatar={
            <Avatar src={avatarImage} sx={{ bgcolor: 'red' }} aria-label="recipe">
              {author.slice(0, 1).toLocaleUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        <CardMedia component="img" image={postImage} alt={title} sx={{ height: '20%' }} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
