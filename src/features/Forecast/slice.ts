import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/types'
import { DEFAULT_CITY } from './constants'
import { getForecastDailyWeather, getForecastHourlyWeather } from './services'
import {
  DailyWeatherResponseProps,
  ForecastInitialState,
  HourlyWeatherResponseProps,
  Location,
} from './types'
import { dateFormat } from './utils'

const initialState: ForecastInitialState = {
  location: DEFAULT_CITY,
  view: 'hourly',
}

export const getForecastHourlyWeatherAction = createAsyncThunk<
  HourlyWeatherResponseProps,
  Location
>('getForecastHourlyWeatherAction', async (location) => {
  const date = new Date()
  const { data } = await getForecastHourlyWeather({
    ...location,
    start_date: dateFormat(date),
    end_date: dateFormat(date),
  })

  return data
})

export const getForecastDailyWeatherAction = createAsyncThunk<
  DailyWeatherResponseProps,
  Location
>('getForecastDailyWeatherAction', async (location) => {
  const { data } = await getForecastDailyWeather(location)
  return data
})

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setPosition: (state, { payload }: PayloadAction<Location | null>) => ({
      ...state,
      location: payload,
    }),
  },
})

export const selectLocation = (state: RootState) => state.forecast.location
