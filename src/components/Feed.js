import { Box, ListItem, ListItemButton, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const Feed = ({ mode, setMode, searchTerm }) => {
  const [showSwitch, setShowSwitch] = useState(window.innerWidth <= 600); // Initial state check

  useEffect(() => {
    const handleResize = () => {
      setShowSwitch(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box flex={4} width={800}>
      {showSwitch && ( // Conditionally render switch on XS screens
        <ListItem
          disablePadding
          sx={{
            display: { xs: "block" },
            position: "absolute", // Added absolute positioning
          }}
        >
          <ListItemButton>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
      )}
      <Post searchTerm={searchTerm} />
    </Box>
  );
};

export default Feed;
