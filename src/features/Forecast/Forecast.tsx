import React from 'react'
import { CitySelect } from './CitySelect'
import { HourlyForecast } from './HourlyForecast'
import { ForecastStyled } from './style'

export const Forecast = () => {
  return (
    <ForecastStyled>
      <CitySelect />
      <HourlyForecast />
    </ForecastStyled>
  )
}
