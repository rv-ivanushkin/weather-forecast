import { HourlyWeatherResponseProps, Hour } from './types'

export const dateFormat = (date: Date) => date.toJSON().slice(0, 10)

export const getTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000)

  return date.toJSON().slice(11, 16)
}
export const getHoursFromForecast = (
  forecast: HourlyWeatherResponseProps
): Hour[] => {
  const result: Hour[] = []
  forecast.hourly.time.forEach((time, index) => {
    result.push({
      time,
      temperature_2m: forecast.hourly.temperature_2m[index],
      surface_pressure: forecast.hourly.surface_pressure[index],
      cloudcover: forecast.hourly.cloudcover[index],
      windspeed_10m: forecast.hourly.windspeed_10m[index],
    })
  })
  return result
}
