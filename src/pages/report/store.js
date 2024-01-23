// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { showSuccesToast } from 'src/utiltis/toastSecces'
import { showErrorToast } from 'src/utiltis/toastUtils'

export const getReportsData = createAsyncThunk('ReportStore/getReportsData', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/indexreport', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

<<<<<<< HEAD
// export const RemoveReport = createAsyncThunk('ReportStore/RemoveReport', async id => {
//  try{
//   const response = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL+`/api/deletereport/${id}`, {
//     headers: {
//       Accept: 'application/json',
//       Authorization: `Bearer ${localStorage.accessToken}`
//     }
//   })
//   showSuccesToast(response.data.data.message)

//   return response.data
//  }
//  catch(error){
//   showErrorToast(error.response?.data?.message);

//   return rejectWithValue(error.response?.data);

//  }

// })
=======
export const RemoveReport = createAsyncThunk('ReportStore/RemoveReport', async id => {
 try{
  const response = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL+`/api/deletereport/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  showSuccesToast(response.data.data.message)
   
  return response.data
 }
 catch(error){
  showErrorToast(error.response?.data?.message);
  
  return rejectWithValue(error.response?.data);

 }
  
})
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c

const appReportSlice = createSlice({
  name: 'ReportStore',
  initialState: {
    data: [],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
<<<<<<< HEAD
      // .addCase(getReportsData.pending, state => {
      //   // Set loading to true when the request starts
      //   state.loading = true
      // })
      // .addCase(getReportsData.fulfilled, (state, action) => {
      //   // Set loading to false when the request is fulfilled
      //   state.loading = false
      //   state.data = action.payload.data
      // })

      // .addCase(RemoveReport.fulfilled, state => {
      //   state.status = 'succeeded'
      // })
=======
      .addCase(getReportsData.pending, state => {
        // Set loading to true when the request starts
        state.loading = true
      })
      .addCase(getReportsData.fulfilled, (state, action) => {
        // Set loading to false when the request is fulfilled
        state.loading = false
        state.data = action.payload.data
      })

      .addCase(RemoveReport.fulfilled, state => {
        state.status = 'succeeded'
      })
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
  }
})

export default appReportSlice.reducer
