import { createSlice } from "@reduxjs/toolkit"

//! this essentially will be the state that will be stored in our Global state so this type of information this basically this data will be accessible throughout our entire application and we can grab it anywhere we want so we don't have to pass in State and properties down to different components
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
    setLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state) => {
      state.user = null
      state.token = null
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends
      } else {
        console.error("user friends non-existent")
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post
        return post
      })
      state.posts = updatedPosts
    },
  },
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions

export default authSlice.reducer
