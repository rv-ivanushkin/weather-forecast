import { configureStore } from '@reduxjs/toolkit'
import { themeModeSlice } from 'src/features'
import { forecastSlice } from 'src/features/'

export const store = configureStore({
  reducer: {
    themeMode: themeModeSlice.reducer,
    [forecastSlice.name]: forecastSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
