import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  friends: [],
  reducers: {
    userInfo: (state, action) => {
      state.value = action.payload
    },
    addFriend: (state, action) => {
      state.friends.push(action.payload);
    },
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
  },
})

export const { userInfo, addFriend } = userSlice.actions
export default userSlice.reducer