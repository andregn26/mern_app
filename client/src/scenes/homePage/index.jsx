import NavBar from "scenes/navNar"
import UserWidget from "scenes/widgets/UserWidget"
import MyPostWidget from "scenes/widgets/MyPostWidget"
import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import PostsWidget from "scenes/widgets/PostsWidget"
import FriendsListWidget from "scenes/widgets/FriendsListWidget"

const HomePage = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)")
  const { _id, picturePath } = useSelector((state) => state.user)
  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobile ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobile ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>{" "}
        <Box flexBasis={isNonMobile ? "42%" : undefined} mt="2rem">
          <MyPostWidget picturePath={picturePath} />
          <Box mt="2rem">
            <PostsWidget userId={_id} />
          </Box>
        </Box>{" "}
        {isNonMobile && (
          <Box flexBasis="26%">
            <FriendsListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage
