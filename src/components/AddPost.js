import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPost = () => {
  const [addPost, setAddPost] = useState(false);
  const [createPost, setCreatePost] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Post created:", createPost);
    setAddPost(false);
    setCreatePost("");
  };

  return (
    <Box>
      <Tooltip
        onClick={(e) => setAddPost(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={addPost}
        onClose={(e) => setAddPost(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          borderRadius={5}
          p={2}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            value={createPost} // Bind state value to TextField
            onChange={(event) => {
              setCreatePost(event.target.value);
            }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="warning" />
            <Image color="secondary" />
            <VideoCameraBack color="primary" />
            <PersonAdd color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handleClick}>Post</Button>
            <Button sx={{ width: "100px" }} onClick={handleClick}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default AddPost;
