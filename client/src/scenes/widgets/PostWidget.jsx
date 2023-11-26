import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPost } from "state";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Avatar, Button, Stack, Tooltip } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  audioPath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  // const neutralLight = theme.palette.neutral.light;
  // const dark = theme.palette.neutral.dark;
  // const background = theme.palette.background.default;
  // const primaryLight = theme.palette.primary.light;
  // const alt = theme.palette.background.alt;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const patchCommentLike = async (commentId) => {
    const response = await fetch(
      `http://localhost:3001/posts/${postId}/${commentId}/like`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>

      {audioPath && (
        <AudioPlayer
          src={audioPath}
          onPlay={(e) => console.log("onPlay")}
          style={{ marginTop: "0.75rem " }}
        />
      )}
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={picturePath}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>

      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, index) => {

            const isLikedComment = Boolean(
              comment.commentLikes[loggedInUserId]
            );

            return (
              <Box key={`${comment.userId}-${index}`} sx={{ mt: "1rem" }}>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="top"
                  sx={{ p: "0.5rem 0rem 0.15rem 0rem" }}
                  spacing={2}
                >
                  <Avatar
                    src={comment.userPicturePath}
                    sx={{ width: 35, height: 35, mr: 1 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      {comment.firstName} {comment.lastName}
                    </Typography>
                    <Typography sx={{ color: main, mt: "0.05rem" }}>
                      {comment.text}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      ml: "auto",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => patchCommentLike(comment._id)}
                    >
                      {isLikedComment ? (
                      <ThumbUpAltOutlinedIcon fontSize="inherit" sx={{ color: primary }} />) : 
                      <ThumbUpAltOutlinedIcon fontSize="inherit" /> }
                    </IconButton>
                    <Typography variant="caption">
                      {
                        Object.values(comment.commentLikes).filter(Boolean)
                          .length
                      }
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
