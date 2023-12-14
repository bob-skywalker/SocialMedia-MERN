import { Drawer, IconButton, InputBase, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const ChatWindow = ({ open, onClose, children, sx }) => {
  const [inputText, setInputText] = useState("");
  const theme = useTheme();
  const { palette } = useTheme();
  const main = palette.primary.main;
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const handleSendMessage = () => {
    console.log(inputText);
    setInputText("");
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={sx}>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <Box sx={{ overflow: "auto", height: "calc(100% - 64px)" }}>
        {children}
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px",
          borderTop: "1px solid #ccc",
          backgroundColor: neutralLight,
          width: "auto",
        }}
      >
        <InputBase
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          endAdornment={
            <IconButton onClick={handleSendMessage}>
              <SendIcon
                sx={{
                  backgroundColor: neutralLight,
                }}
              />
            </IconButton>
          }
        ></InputBase>
      </Box>
    </Drawer>
  );
};

export default ChatWindow;
