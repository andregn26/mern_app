import { PersonAddOutlined, PersonRemovedOutlined } from "@mui/icons-material"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setFriends } from "state"
import FlexBetween from "./FlexBetween"
import UserImage from "./UserImage"

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const { palette } = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { _id } = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const friends = useSelector((state) => state.user.friends)
  return <div>Friend</div>
}

export default Friend
