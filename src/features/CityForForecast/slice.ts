import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { CityForForecastState, SearchResponse } from './types'

const initialState: CityForForecastState = {}

export const searchCityByName = createAsyncThunk<SearchResponse, string>(
  'searchCityByName',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<SearchResponse>(
        'https://geocoding-api.open-meteo.com/v1/search',
        {
          params: {
            name,
          },
        }
      )
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const cityForForecastSlice = createSlice({
  name: 'cityForForecastSlice',
  initialState,
  reducers: {
    setPosition: (state, { payload }: PayloadAction<CityForForecastState>) =>
      payload,
  },
})
