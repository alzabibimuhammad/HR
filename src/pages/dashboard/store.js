
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestDashboard } from 'src/utiltis/AxiosDashboard';
import { ShowErrorToast } from 'src/utiltis/showErrorToast';





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

export const storeAttendanceLogs = createAsyncThunk(
  'Dashboard/storeAttendanceLogs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await requestDashboard({ url: '/api/storeAttendanceLogs' });

      return response.data; // Return data directly
    } catch (error) {
      // Dispatching an error action using rejectWithValue
      return rejectWithValue(error);
    }
  }
);

const DashboardSlice = createSlice({
  name: 'Dashboard',
  initialState: {
    loading: 'idle',
    AttendancePercentage: [],
    Registertion: [],
    attendanceLogs: null, // Initialize with null
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(storeAttendanceLogs.pending, (state) => {

        state.loading = 'pending';
      })
      .addCase(storeAttendanceLogs.fulfilled, (state, action) => {


        state.AttendancePercentage = action.payload.data;
        state.loading = 'succeeded';
      })
      .addCase(storeAttendanceLogs.rejected, (state, action) => {
        state.loading = 'failed';

        ShowErrorToast(action?.payload, "");
      })
      .addCase(getAttendancePercentage.fulfilled, (state, action) => {

        state.AttendancePercentage = action.payload?.data;
      })
      .addCase(getRegisteration.fulfilled, (state, action) => {

        state.Registertion = action.payload?.data;
      });
  },
})

export default DashboardSlice.reducer
