import NavBar from "scenes/navNar"
import UserWidget from "scenes/widgets/UserWidget"
import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"

const HomePage = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)")
  const { _id, picturePath } = useSelector((state) => state.user)
  return (
    <div>
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
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default HomePage
