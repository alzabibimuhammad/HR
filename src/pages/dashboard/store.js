
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { request } from 'src/utiltis/AxiosUtilitis'
import { showErrorToast } from 'src/utiltis/showErrorToast';



export const getAttendancePercentage = createAsyncThunk('Dashboard/getAttendancePercentage', async _ => {
  try {
    const response = await request({ url: '/api/showPercent' });
    return response.data;

  } catch (error) {
    throw error;
    }
})

export const getRegisteration = createAsyncThunk('Dashboard/getRegisteration', async date => {
  try {
    const response = await request({ url: `/api/DayAttendance/${date}`});
    return response.data;

  } catch (error) {

    showErrorToast(error?.response?.status,"Registeration Not Found")
    }

})

export const storeAttendanceLogs = createAsyncThunk('Dashboard/storeAttendanceLogs', async () => {
  try{
  const response = request({ url: '/api/storeAttendanceLogs' })

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
