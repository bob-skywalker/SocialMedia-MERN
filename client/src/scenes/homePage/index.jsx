import { Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidgets";
import MyPostWidget from "scenes/widgets/MyPostWidget";

const HomePage = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? "flex" : "block"}
        gap="0.6rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>

        <Box
          flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          {
            <ul>
              {posts.map((post, index) => {
                return <li>{post.description}</li>;
              })}
            </ul>
          }
        </Box>
        {isNonMobileScreen && <Box flexBasis="26%"></Box>}
      </Box>
    </>
  );
};

export default HomePage;
