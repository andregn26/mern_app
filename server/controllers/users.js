import User from "../models/User"

//!READ

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    const friendsList = await Promise.all(
      user.friendsList.map((id) => User.findById(id))
    )
    const formattedFriends = friendsList.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          location,
          picturePath,
        }
      }
    )
    res.status(200).json(formattedFriends)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}

//!UPDATE

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params
    const user = await User.findById(id)
    const friend = await User.findById(id)

    if (user.friendsList.includes(friendId)) {
      user.friendsList = user.friendsList.filter((id) => id !== friendId)
      friend.friendsList = friend.friendsList.filter((id) => id !== id)
    } else {
      user.friendsList.push(friendId)
      friend.friendsList.push(id)
    }
    await user.save()
    await friend.save()
    const formattedFriends = friendsList.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          location,
          picturePath,
        }
      }
    )
    res.status(200).json(formattedFriends)
  } catch (err) {
    res.status(404).json({ msg: err.message })
  }
}
