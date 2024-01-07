// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
import calendar from 'src/store/apps/calendar'

// ** Reducers
import user from 'src/store/apps/user'


export const store = configureStore({
  reducer: {
    user,
    calendar,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
