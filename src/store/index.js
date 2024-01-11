// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
import calendar from 'src/store/apps/calendar'
import email from 'src/store/apps/email'
// ** Reducers
import user from 'src/store/apps/user'

import Dashboard from 'src/pages/dashboard/store'

export const store = configureStore({
  reducer: {

    Dashboard


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
