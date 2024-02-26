import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import { showErrorToast } from 'src/utiltis/showErrorToast'

export const getRegisteration = createAsyncThunk('RegisterStore/getRegisteration', async date => {
  try{
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/DayAttendance/${date}?branch_id=${localStorage.branch}`, {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  return {
    data: response.data
  }
  }
  catch (error) {
     showErrorToast(error,"")
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
        state.data = action?.payload?.data
      })


  }
})

export default appRegiterSlice.reducer
