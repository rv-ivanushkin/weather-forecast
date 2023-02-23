import axios from 'axios'
import { DAILY, DEFAULT_PROPS, HOURLY } from './constants'
import {
  DailyWeatherRequestProps,
  DailyWeatherResponseProps,
  HourlyWeatherRequestProps,
  HourlyWeatherResponseProps,
  Location,
  SearchResponse,
} from './types'

export const searchCityByName = (name: string) =>
  axios.get<SearchResponse>('https://geocoding-api.open-meteo.com/v1/search', {
    params: {
      name,
    },
  })

export const getForecastHourlyWeather = (props: HourlyWeatherRequestProps) =>
  axios.get<HourlyWeatherResponseProps>(
    'https://api.open-meteo.com/v1/forecast',
    {
      params: {
        hourly: HOURLY,
        ...DEFAULT_PROPS,
        ...props,
      },
    }
  )

export const getForecastDailyWeather = (props: DailyWeatherRequestProps) =>
  axios.get<DailyWeatherResponseProps>(
    'https://api.open-meteo.com/v1/forecast',
    {
      params: {
        daily: DAILY,
        ...DEFAULT_PROPS,
        ...props,
      },
    }
  )
