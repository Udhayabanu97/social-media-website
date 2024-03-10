import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const itemData = [
  {
    img: "https://material-ui.com/static/images/Image-list/breakfast.jpg",
    title: "Breakfast",
  },
  {
    img: "https://material-ui.com/static/images/Image-list/burgers.jpg",
    title: "Burger",
  },
  {
    img: "https://material-ui.com/static/images/Image-list/camera.jpg",
    title: "Camera",
  },
];

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block", md: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={10} total={12}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 330, height: 110 }} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        {/* <ImageList cols={{ xs: 1, sm: 2, md: 3 }} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/Image-list/breakfast.jpg"
              alt="latest photos"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/Image-list/burgers.jpg"
              alt="latest photos"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/Image-list/camera.jpg"
              alt="latest photos"
            />
          </ImageListItem>
        </ImageList> */}
        <Typography variant="h6" fontWeight={200}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
