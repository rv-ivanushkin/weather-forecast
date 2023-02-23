import { Location } from './types'

export const DEFAULT_CITY: Location = {
  latitude: 40.37767,
  longitude: 49.89201,
  name: 'Baku',
  country: 'Azerbaijan',
  timezone: 'Asia/Baku',
}

export const DAILY = [
  'temperature_2m_max',
  'temperature_2m_min',
  'sunrise,sunset',
  'windspeed_10m_max',
]

export const DEFAULT_PROPS = {
  timezone: 'auto',
  timeformat: 'unixtime',
}

export const HOURLY = [
  'temperature_2m',
  'surface_pressure',
  'cloudcover',
  'windspeed_10m',
]

export const SVG_ULR = 'https://hatscripts.github.io/circle-flags/flags/'
