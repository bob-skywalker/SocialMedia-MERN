import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Input,
  Icon,
  Popover,
  Divider,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import ChatWindow from "scenes/widgets/ChatWidget";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const { palette } = useTheme();
  const main = palette.primary.main;
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`;

  const [messageAnchorEl, setMessageAnchorEl] = useState(null);
  const isMessagePopoverOpen = Boolean(messageAnchorEl);

  const [messages, setMessages] = useState([]);

  //Chat Window Logic 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState(null);
  const handleOpenChat = (messageId) => {
    const selectedMessage = messages.find(message => message._id === messageId);
    setActiveMessage(selectedMessage);
    setIsChatOpen(true);
    handleMessagePopoverClose();
  }

  const handleCloseChat = () => {
    setIsChatOpen(false);
  }

  const handleMessagePopoverOpen = (event) => {
    setMessageAnchorEl(event.currentTarget);
  };

  const handleMessagePopoverClose = () => {
    setMessageAnchorEl(null);
  };

  const getMessages = async () => {
    try {
      const response = await fetch(`http://localhost:3001/messages/user/${user._id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}`}
    })
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      console.log('Error fetching messages for User.')
    }
  } 

  useEffect(() => {
    getMessages();
  },[user._id, token]);
  

  return (
    <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="2rem">
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            color="primary"
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            Bo's Lair
          </Typography>
          {isNonMobileScreens && (
            <FlexBetween
              backgroundColor={neutralLight}
              borderRadius="9px"
              gap="3rem"
              padding="0.1rem 1.5rem"
            >
              <InputBase placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          )}
        </FlexBetween>
        {isNonMobileScreens ? (
          <FlexBetween gap="2rem">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <IconButton onClick={handleMessagePopoverOpen}>
              <Message sx={{ fontSize: "25px" }} />
            </IconButton>

            <Popover
              id="message-popover"
              open={isMessagePopoverOpen}
              anchorEl={messageAnchorEl}
              onClose={handleMessagePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box p={2} sx={{width: '350px'}} textAlign='left'>

                {messages.map(message => (
                  <Box>
                    <Box gap="1rem" 
                         key={message._id} 
                         sx={{ display: 'flex', 
                         alignItems:'center', 
                         marginBottom: '0.7rem', "&:hover": {
                              color: palette.primary.dark,
                              cursor:'pointer'
                            }}}
                         marginTop='0.7rem'
                         onClick={() => {
                          handleOpenChat(message._id);
                         }}
                    >
                      <UserImage image={message.picturePath} size="35px"/>
                      <Box
                      sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                      >
                        <Typography
                          variant="h5"
                          fontWeight="600"
                        >{message.messageSenderName}</Typography>
                        <Typography
                          variant="body1"
                          fontWeight="500"
                          noWrap
                        >
                          {message.content[message.content.length - 1].text}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider /> 
                  </ Box>
                ))}
              </Box>
            </Popover>

            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  padding: "0.25rem 1rem",
                  "& .MuisvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>

                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        ) : (
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu />
          </IconButton>
        )}

        {!isNonMobileScreens && isMobileMenuToggled && (
          <Box
            position="fixed"
            right="0"
            bottom="0"
            height="100%"
            zIndex="10"
            maxWidth="500px"
            minWidth="300px"
            backgroundColor={background}
          >
            <Box display="flex" justifyContent="flex-end" p="1rem">
              <IconButton
                onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
                <Close />
              </IconButton>
            </Box>
            <FlexBetween
              gap="3rem"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignContent="center"
            >
              <IconButton
                onClick={() => dispatch(setMode())}
                sx={{ fontSize: "25px" }}
              >
                {theme.palette.mode === "dark" ? (
                  <DarkMode sx={{ fontSize: "25px" }} />
                ) : (
                  <LightMode sx={{ color: dark, fontSize: "25px" }} />
                )}
              </IconButton>
              <Message sx={{ fontSize: "25px" }} />
              <Notifications sx={{ fontSize: "25px" }} />
              <Help sx={{ fontSize: "25px" }} />
              <FormControl variant="standard" value={fullName}>
                <Select
                  value={fullName}
                  sx={{
                    backgroundColor: neutralLight,
                    width: "150px",
                    borderRadius: "0.25rem",
                    padding: "0.25rem 1rem",
                    "& .MuisvgIcon-root": {
                      pr: "0.25rem",
                      width: "3rem",
                    },
                    "& .MuiSelect-select:focus": {
                      backgroundColor: neutralLight,
                    },
                  }}
                  input={<InputBase />}
                >
                  <MenuItem value={fullName}>
                    <Typography>{fullName}</Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      dispatch(setLogout());
                    }}
                  >
                    Log Out
                  </MenuItem>
                </Select>
              </FormControl>
            </FlexBetween>
          </Box>
        )}
      </FlexBetween>
      <ChatWindow open={isChatOpen} 
                  onClose={handleCloseChat} 
                  sx={{
                    '& .MuiDrawer-paper': { // This targets the internal Paper component of the Drawer
                      width: '350px', 
                      boxSizing: 'border-box'
                      // Add any other styles here
                    },
                  }}
      >
        {activeMessage ? 
        (<div>
          <Box display='flex' alignItems='center' gap={2} pl={2}>
            <UserImage image={activeMessage.picturePath} size="35px"/>
            <Box ml={0.5}>
            <Typography variant="h6">{activeMessage.senderName}</Typography>
            <Typography variant="body1">{activeMessage.content}</Typography>
            </Box>
          </Box>
        </div>) : <div>Select a message to start chatting.</div>
      } 
      </ChatWindow>
    </div>
  );
};

export default Navbar;
