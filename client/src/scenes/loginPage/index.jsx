import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import Form from "./Form"

const LoginPage = () => {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)")
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SoulGram
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="bold" fontSize="16px" color="primary">
          Welcome to SoulGram, the Social Media for SoulDancers!
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage
