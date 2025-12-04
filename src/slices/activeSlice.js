import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem("activeChat")) || null,
}

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    activeInfo: (state, action) => {
      state.value = action.payload
      localStorage.setItem("activeChat", JSON.stringify(action.payload));
    },
    clearActiveInfo: (state) => {
      state.value = null;
      localStorage.removeItem("activeChat");
    }
    
  },
})

export const { activeInfo, clearActiveInfo } = activeSlice.actions;
export default activeSlice.reducer;