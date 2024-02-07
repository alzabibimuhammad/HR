// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
import calendar from 'src/store/apps/calendar'
import email from 'src/store/apps/email'
import RegisterStore from 'src/pages/registeration/store'
import user from 'src/store/apps/user'
import Dashboard from 'src/pages/dashboard/store'
import ReportStore from 'src/pages/report/store'

export const store = configureStore({
  reducer: {
    calendar,
    email,
    Dashboard,
    ReportStore,
    user


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
