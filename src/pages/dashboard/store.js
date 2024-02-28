
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestDashboard } from 'src/utiltis/AxiosDashboard';
import { showErrorToast } from 'src/utiltis/showErrorToast';



export const getAttendancePercentage = createAsyncThunk('Dashboard/getAttendancePercentage', async _ => {
  try {
    const response = await requestDashboard({ url: '/api/showPercent' });
    return response.data;

  } catch (error) {
    showErrorToast("Network Error")
    }
})

export const getRegisteration = createAsyncThunk('Dashboard/getRegisteration', async date => {
  try {
    const response = await requestDashboard({ url: `/api/DayAttendance/${date}`});
    return response.data;

  } catch (error) {

    showErrorToast(error?.response?.status,"Registeration Not Found")
    }

})

export const storeAttendanceLogs = createAsyncThunk('Dashboard/storeAttendanceLogs', async () => {
  try{
  const response = requestDashboard({ url: '/api/storeAttendanceLogs' })

  return {
   data: response.data
  }
}
  catch (error){
    showErrorToast(error,"")
  }
})

const DashboardSlice = createSlice({
  name: 'Dashboard',
  initialState: {
    AttendancePercentage: [],
    Registertion: [],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder

    .addCase(getAttendancePercentage.fulfilled,(state,action)=>{
      state.loading = false
      state.AttendancePercentage = action?.payload?.data
    })
    .addCase(getRegisteration.fulfilled,(state,action)=>{
      state.loading = false
      state.Registertion = action?.payload?.data
    })


  },
})

export default DashboardSlice.reducer
