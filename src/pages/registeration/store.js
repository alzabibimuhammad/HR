import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const getRegisteration = createAsyncThunk('Dashboard/getRegisteration', async date => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/DayAttendance/${date}`, {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  return {
    data: response.data
  }
})

const appRegiterSlice = createSlice({
  name: 'RegisterStore',
  initialState: {
    data: [],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(getRegisteration.pending, state => {
        state.loading = true
      })
      .addCase(getRegisteration.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data
      })


  }
})

export default appRegiterSlice.reducer
