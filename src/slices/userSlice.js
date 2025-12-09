import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.value = action.payload
    },
    userNameUpdate: (state, action) => {
      if (state.value && state.value.user) {
        state.value.user.displayName = action.payload;
      }
    },
    statusUpdate: (state, action) => {
      state.value.user.status = action.payload;
    }

  },
})

export const { userInfo, userNameUpdate, statusUpdate } = userSlice.actions
export default userSlice.reducer