
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'



export const getAttendancePercentage = createAsyncThunk('Dashboard/getAttendancePercentage', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/showPercent', {
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
    AttendancePercentage: [],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder

    .addCase(getAttendancePercentage.fulfilled,(state,action)=>{
      state.loading = false
      state.AttendancePercentage = action.payload.data
    })



  },
})

export default DashboardSlice.reducer
