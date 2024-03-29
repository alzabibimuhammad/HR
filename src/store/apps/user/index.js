import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Users
export const fetchData = createAsyncThunk('appUsers/fetchData', async params => {
  const response = await axios.get(`/apps/users/list?branch_id=${localStorage?.branch}`, {
    params
  })

  return response.data
})

// ** Add User
export const addUser = createAsyncThunk('appUsers/addUser', async (data, { getState, dispatch }) => {
  const response = await axios.post(`/apps/users/add-user?branch_id=${localStorage?.branch}`, {
    data
  })
  dispatch(fetchData(getState().user.params))

  return response.data
})

// ** Delete User
export const deleteUser = createAsyncThunk('appUsers/deleteUser', async (id, { getState, dispatch }) => {
  const response = await axios.delete(`/apps/users/delete?branch_id=${localStorage?.branch}`, {
    data: id
  })
  dispatch(fetchData(getState().user.params))

  return response.data
})

export const appUsersSlice = createSlice({
  name: 'appUsers',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    userId: null,
    RatingUser:null,
    profileTab:1
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setRatingUser: (state, action) => {
      state.RatingUser = action.payload;
    },
    setProfileTap: (state, action) => {
      state.profileTab = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.users
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export const { setUserId,setRatingUser,setProfileTap } = appUsersSlice.actions;



export default appUsersSlice.reducer
