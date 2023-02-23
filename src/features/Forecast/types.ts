import { type } from 'os'

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface City {
  timezone: string
  name: string
  country: string
}

export interface DailyUnits {
  time: string
  temperature_2m_max: string
  temperature_2m_min: string
  sunrise: string
  sunset: string
  windspeed_10m_max: string
}

export interface Daily {
  time: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  sunrise: number[]
  sunset: number[]
  windspeed_10m_max: number[]
}

export interface HourlyUnits {
  time: string
  temperature_2m: string
  surface_pressure: string
  cloudcover: string
  windspeed_10m: string
}

export interface Hourly {
  time: number[]
  temperature_2m: number[]
  surface_pressure: number[]
  cloudcover: number[]
  windspeed_10m: number[]
}

/** for render */
export type Hour = { [key in keyof Hourly]: number }

export interface HourlyDate {
  start_date: string
  end_date: string
}

export type Location = Coordinates & City
export type Locations = Location[]

export type Views = 'hourly' | 'daily'

/** using for AxiosResponse */
export interface SearchResponse {
  results: SearchCityProps[]
  generationtime_ms: number
}

/** using for AxiosResponse */
export interface SearchCityProps {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  feature_code: string
  country_code: string
  admin1_id: number
  timezone: string
  population?: number
  country_id: number
  country: string
  admin1: string
  admin2_id?: number
  postcodes?: string[]
  admin2?: string
  admin3_id?: number
  admin3?: string
}

export type HourlyWeatherRequestProps = Coordinates & HourlyDate
export type DailyWeatherRequestProps = Coordinates

export interface DailyWeatherResponseProps {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  daily_units: DailyUnits
  daily: Daily
}

export interface HourlyWeatherResponseProps {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: HourlyUnits
  hourly: Hourly
}

export interface ForecastInitialState {
  location: Location | null
  view: Views
}
