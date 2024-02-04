// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
import calendar from 'src/store/apps/calendar'
import email from 'src/store/apps/email'
import user from 'src/store/apps/user'

import Dashboard from 'src/pages/dashboard/store'

export const store = configureStore({
  reducer: {
    calendar,
    email,
    Dashboard,
    user


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
