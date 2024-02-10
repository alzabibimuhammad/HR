// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import { showSuccesToast } from 'src/utiltis/toastSecces'
import { showErrorToast } from 'src/utiltis/showErrorToast'

export const getContractsData = createAsyncThunk('ContractsStore/getContractsData', async () => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/showCoach', {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

export const RemoveContracts = createAsyncThunk('ContractsStore/RemoveContracts', async id => {
  try {
    const response = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL + `/api/delete/${id}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.accessToken}`
      }
    })
    showSuccesToast(response.data.message)

    return response.data
  } catch (error) {
    showErrorToast(error.response?.data?.message)

    return rejectWithValue(error.response?.data)
  }
})

//////////////////////////////////////////////////////////////

export const addContract = createAsyncThunk('ContractsStore/addContract', async coachData => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + `/api/register`, coachData, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.accessToken}`
      }
    })
    showSuccesToast(response.data.message)

    return response.data
  } catch (error) {
    showErrorToast(error.response?.data?.message)

    return rejectWithValue(error.response?.data)
  }
})

////////////////////////////////////////////////////edit//////////////////////////////////////////////
export const EditContract = createAsyncThunk('ContractsStore/EditContract', async coachData => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/updateUser/${coachData.Data.id}`,
      coachData.data,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.accessToken}`
        }
      }
    )
    showSuccesToast(response.data.message)

    return response.data
  } catch (error) {
    showErrorToast(error.response?.data?.message)

    return rejectWithValue(error.response?.data)
  }
})

export const getContractInfo = createAsyncThunk('ContractsStore/getContractInfo', async id => {
  const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/showCoachInfo/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })

  return {
    data: response.data
  }
})

const appContractSlice = createSlice({
  name: 'ContractsStore',
  initialState: {
    data: [],
    ContractInfo: [],
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContractsData.pending, state => {
        state.loading = true
      })
      .addCase(getContractsData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data
      })
      .addCase(RemoveContracts.fulfilled, state => {
        state.status = 'succeeded'
      })
      .addCase(getContractInfo.fulfilled, (state, action) => {
        state.loading = false
        state.ContractInfo = action.payload.data
      })
  }
})

export default appContractSlice.reducer
