// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import toast from 'react-hot-toast'
import { FormateDate } from 'src/utiltis/DateFormate'
import { FormateDateTime } from 'src/utiltis/DateTimeFormat'

// ** Fetch Events
export const fetchEvents = createAsyncThunk('appCalendar/fetchEvents', async calendars => {
  const response = await axios.get('/apps/calendar/events', {
    params: {
      calendars
    }
  })

  return response.data
})

// ** Add Event
export const addEvent = createAsyncThunk('/Calendar/Add', async (event, { dispatch }) => {
  console.log("🚀 ~ addEvent ~ event:", event)
  const formData =new FormData()
  const end_date=FormateDateTime(event.end)
  const start_date=FormateDateTime(event.start)
  console.log("🚀 ~ addEvent ~ start_date:", start_date)

  console.log("🚀 ~ addEvent ~ start_date:", end_date)
  
  formData.append('title',event.title)
  formData.append('description',event.extendedProps.description)
  formData.append('end',end_date)
  formData.append('start',start_date)
  

  const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL +'/api/Calendar/Add',
formData
   ,{
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`
    },
  } 
  
  ).then(()=>{
    toast.success('Event Added ......')
  })
  await dispatch(fetchEvents(['Personal', 'Business', 'Family', 'Holiday', 'ETC']))

  return response.data.event
})

// ** Update Event
export const updateEvent = createAsyncThunk('appCalendar/updateEvent', async (event, { dispatch }) => {
  const response = await axios.post('/apps/calendar/update-event', {
    data: {
      event
    }
  })
  await dispatch(fetchEvents(['Personal', 'Business', 'Family', 'Holiday', 'ETC']))

  return response.data.event
})

// ** Delete Event
export const deleteEvent = createAsyncThunk('appCalendar/deleteEvent', async (id, { dispatch }) => {
  const response = await axios.delete('/apps/calendar/remove-event', {
    params: { id }
  })
  await dispatch(fetchEvents(['Personal', 'Business', 'Family', 'Holiday', 'ETC']))

  return response.data
})

export const appCalendarSlice = createSlice({
  name: 'appCalendar',
  initialState: {
    events: [],
    selectedEvent: null,
    selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
  },
  reducers: {
    handleSelectEvent: (state, action) => {
      state.selectedEvent = action.payload
    },
    handleCalendarsUpdate: (state, action) => {
      const filterIndex = state.selectedCalendars.findIndex(i => i === action.payload)
      if (state.selectedCalendars.includes(action.payload)) {
        state.selectedCalendars.splice(filterIndex, 1)
      } else {
        state.selectedCalendars.push(action.payload)
      }
      if (state.selectedCalendars.length === 0) {
        state.events.length = 0
      }
    },
    handleAllCalendars: (state, action) => {
      const value = action.payload
      if (value === true) {
        state.selectedCalendars = ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
      } else {
        state.selectedCalendars = []
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload
    })
  }
})

export const { handleSelectEvent, handleCalendarsUpdate, handleAllCalendars } = appCalendarSlice.actions

export default appCalendarSlice.reducer
