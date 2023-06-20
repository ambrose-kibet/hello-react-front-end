import { configureStore } from '@reduxjs/toolkit'
import greetingsReducer from './features/greetingSlice'
export const store = configureStore({
  reducer: {
    greetings:greetingsReducer
  },
})