import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost, setPosts } from "state";
import PostWidget from "./PostWidget";


const PostsWidget = ({ userId, isProfile = false}) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);

    const getPosts = async () => {
        const response = await fetch(`http://localhost:3001/posts`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}`}
        });
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        dispatch(setPosts({posts: sortedData}));
    }

    const getUserPosts = async() => {
        const response = await fetch(`http://localhost:3001/${userId}/posts`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}`}
        });
        const data = await response.json();
        dispatch(setPost({post: data}));
    }

    useEffect(() => {
        if (isProfile) {
            getUserPosts();
        } else {
            getPosts();
        }
    }, []);

    return (
        <>
            {posts.map(
                ({
                   _id,
                   userId,
                   firstName,
                   lastName,
                   description,
                   location,
                   picturePath,
                   userPicturePath,
                   audioPath,
                   likes,
                   comments 
                }) => (
                    <PostWidget
                    key={_id}
                    postId={_id}
                    postUserId={userId}
                    name={`${firstName} ${lastName}`}
                    description={description}
                    location={location}
                    picturePath={picturePath}
                    audioPath={audioPath}
                    userPicturePath={userPicturePath}
                    likes={likes}
                    comments={comments}
                    /> 
                )
            )}
        </>
    )
};

export default PostsWidget;