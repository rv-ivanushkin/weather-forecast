import { configureStore } from '@reduxjs/toolkit'
import { themeModeSlice } from 'src/features'
import { cityForForecastSlice } from 'src/features/CityForForecast/slice'

export const store = configureStore({
  reducer: {
    themeMode: themeModeSlice.reducer,
    cityForForecast: cityForForecastSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
