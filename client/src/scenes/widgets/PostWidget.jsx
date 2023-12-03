import {
  ChatBubbleOutlineOutlined,
  DeleteForeverOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, Fade, Grow, IconButton, TextField, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
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
  const user = useSelector((state) => state.user)


  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const textColor = palette.primary.light;

  //Hover Effects to show names
  const names = Object.values(likes).map((like) => `${like.firstName}`);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleHover = () => {
    if (names.length > 1) {
      setTooltipOpen(true);
    }
  };

  const handleLeave = () => {
    setTooltipOpen(false);
  };

  const tooltipTitle = names.length === 0 ? '' : names.length <= 4 ? names.join(', ') + ' liked this' : `${names.slice(0, 3).join(', ')} and ${names.length - 3} others liked this` 

  const QuickFade = (props) => {
    return <Fade {...props} timeout={0} />
  }
  
  //Adding comment to the Post
  const [commentText, setCommentText] = useState('');
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const submitComment = async () => {

    const commentData = {
      userId: loggedInUserId,
      text: commentText,
      firstName: user.firstName,
      lastName: user.lastName,
      userPicturePath: user.picturePath,
    }


    const response = await fetch(`http://localhost:3001/posts/${postId}/createComment`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    });

    if (response.ok) {
      const updatedPost = await response.json();
      dispatch(setPost({post: updatedPost}));
      setCommentText('')
    } else {
      console.log("Failed to submit Comment")
    }
  }


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

  const deleteComment = async (commentId) => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/${commentId}/deleteComment`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const updatedPost = await response.json();
    dispatch(setPost({post: updatedPost}));
  }

  // useEffect(() => {
  //   if (names.length === 0 && tooltipOpen) {
  //     setTooltipOpen(false)
  //   }
  // }, [names.length, tooltipOpen])

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
            <Tooltip
              title={tooltipTitle}
              open={tooltipOpen}
              onOpen={handleHover}
              onClose={handleLeave}
              arrow
              TransitionComponent={QuickFade}
              PopperProps={{
                placement: 'bottom'
              }}
            >
              <IconButton onClick={patchLike}>
                {isLiked ? (
                  <FavoriteOutlined sx={{ color: primary }} />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </IconButton>
            </Tooltip>
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
        <>
        <Box mt="0.5rem">
          {comments.map((comment, index) => {
            const isLikedComment = Boolean(
              comment.commentLikes[loggedInUserId]
            );
            const isCurrentUser = Boolean(
              comment.userId === loggedInUserId
            )

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
                      onClick={() => deleteComment(comment._id)}
                    >
                      {isCurrentUser && (
                      <DeleteForeverOutlined fontSize="inherit"/>
                      )}
                    </IconButton>

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
                        <ThumbUpAltOutlinedIcon
                          fontSize="inherit"
                          sx={{ color: primary }}
                        />
                      ) : (
                        <ThumbUpAltOutlinedIcon fontSize="inherit" />
                      )}
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
        <Box mt="1rem">
          <form onSubmit={(e) => {
            e.preventDefault();
            submitComment();
          }}>
            <Stack direction="row" spacing={2}>
              <TextField 
                fullWidth
                variant="outlined"
                placeholder="Add a comment..."
                value={commentText}
                onChange={handleCommentChange}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ color: textColor }}
              >
                Post
              </Button>
            </Stack>
          </form>
        </Box>
        </>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;
