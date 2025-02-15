'use client';

import { configureStore } from '@reduxjs/toolkit'
import { tasksSlice } from './tasks/tasksSlice'
import { authSlice } from './auth/authSlice';

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    task: tasksSlice.reducer,
    auth: authSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store