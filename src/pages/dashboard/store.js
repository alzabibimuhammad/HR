
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const getMvp = createAsyncThunk('Dashboard/getMvp', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/mvpCoach', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  
  return {
    data: response.data
  }
})









const DashboardSlice = createSlice({
  name: 'Dashboard',
  initialState: {
    Mvpdata: [],

    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMvp.pending, state => {
        state.loading = true
      })
      .addCase(getMvp.fulfilled, (state, action) => {
        state.loading = false
        state.Mvpdata = action.payload.data
      })


  }
})

export default DashboardSlice.reducer
