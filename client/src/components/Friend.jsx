import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from "react-redux";
import { setFriends, setPosts } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { useNavigate } from "react-router-dom";


const Friend = ({ friendId, name, subtitle, userPicturePath, postId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const isCurrentUser = _id === friendId

    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;


    const isFriend = Array.prototype.find.call(friends, (friend) => friend._id === friendId);

    const deletePost = async() => {
        const response = await fetch(`http://localhost:3001/posts/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json();
        // const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        dispatch(setPosts({posts: sortedData}));
    }

    const patchFriend = async () => {
        const response = await fetch(`http://localhost:3001/users/${_id}/${friendId}`,{
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })
        const data = await response.json();
        dispatch(setFriends({friends: data}));
    };

    return (
        <FlexBetween>
            <FlexBetween gap="1rem">
                <UserImage image={userPicturePath} size="55px" />
                <Box 
                    onClick={() => {
                        navigate(`/profile/${friendId}`);
                        navigate(0);
                    }}
                >
                    <Typography
                        color={main}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            "&:hover": {
                                color: palette.primary.light,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography color={medium} fontSize="0.75rem">
                        {subtitle}
                    </Typography>
                </Box>
            </FlexBetween>
            {
                isCurrentUser ?  (
            <IconButton
                onClick={() => deletePost()} 
                sx={{ backgroundColor: primaryLight, p: "0.15rem"}}
             >
                <DeleteForeverIcon sx={{color: 'red'}}/> 
             
 
             </IconButton>
            ) : (
                <IconButton
                    onClick={() => patchFriend()} 
                    sx={{ backgroundColor: primaryLight, p: "0.6rem"}}
                 >
                     { isFriend ? (
                         <PersonRemoveOutlined sx={{color: primaryDark}}/> 
                     ):
                     (
                         <PersonAddOutlined sx={{color: primaryDark}} />
                     ) 
                 }
     
                 </IconButton>
                )
            }
            
        </FlexBetween>
    )
}

export default Friend;