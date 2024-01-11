// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
import calendar from 'src/store/apps/calendar'
import email from 'src/store/apps/email'

// ** Reducers
import user from 'src/store/apps/user'


export const store = configureStore({
  reducer: {
    user,
    calendar,
    email,


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
