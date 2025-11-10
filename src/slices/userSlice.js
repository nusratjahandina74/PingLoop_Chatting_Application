import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state,action) => {
   state.value = action.payload
    },
    
  },
})

export const { userInfo } = userSlice.actions
export default userSlice.reducer