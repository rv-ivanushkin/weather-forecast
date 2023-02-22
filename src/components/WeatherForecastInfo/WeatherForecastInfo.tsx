import { Link, Typography } from '@mui/material'
import React from 'react'
import { WeatherForecastInfoStyled } from './style'

export const WeatherForecastInfo = () => (
  <WeatherForecastInfoStyled>
    <Typography variant="h6">Weather Forecast</Typography>
    <Typography variant="caption">
      Weather data from{' '}
      <Link href="https://open-meteo.com/">https://open-meteo.com/</Link>
    </Typography>
  </WeatherForecastInfoStyled>
)
