import React, { useEffect, useState } from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import { postDetails } from "../data/feedData";

const Post = ({ searchTerm }) => {
  const [filteredPosts, setFilteredPosts] = useState([]); // Use state to store filtered posts

  useEffect(() => {
    console.log("searchTerm:", searchTerm); // Check received searchTerm
    console.log("postDetails:", postDetails); // Inspect data structure

    if (searchTerm) {
      const filtered = postDetails.filter(
        (post) =>
          typeof post.cardDetails === "string" &&
          post.cardDetails.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive
      );
      setFilteredPosts(filtered);
    } else {
      // Optional: handle empty searchTerm
      setFilteredPosts(postDetails); // Display all posts
    }
  }, [searchTerm]);

  // ... rest of your component logic using filteredPosts

  return (
    <Box sx={{ margin: 6 }}>
      {filteredPosts.length > 0 ? ( // Check if filteredPosts has items
        <div>
          {filteredPosts.map((post, index) => (
            <Card
              key={`post-${index}`}
              sx={{
                marginBottom: 7,
              }}
            >
              <CardHeader
                avatar={post.avatar}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title={post.title}
                subheader={post.subheader}
              />
              <CardMedia
                component="img"
                height="330"
                image={post.img}
                alt={post.content}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.cardDetails}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={
                      <Favorite sx={{ color: "red" }} disableribble />
                    }
                  />
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
      ) : (
        <div>No posts found matching your search.</div>
      )}
    </Box>
  );
};

export default Post;
