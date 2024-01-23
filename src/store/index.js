// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
import calendar from 'src/store/apps/calendar'
import email from 'src/store/apps/email'
<<<<<<< HEAD
=======

>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
// ** Reducers
import user from 'src/store/apps/user'

import Dashboard from 'src/pages/dashboard/store'

export const store = configureStore({
  reducer: {
    calendar,
    email,
<<<<<<< HEAD
    Dashboard
=======
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
