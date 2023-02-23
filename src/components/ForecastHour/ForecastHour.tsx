import { Typography, Box } from '@mui/material'
import React from 'react'
import { Hour } from 'src/features/Forecast/types'
import { getTime } from 'src/features/Forecast/utils'
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone'
import VerticalAlignBottomTwoToneIcon from '@mui/icons-material/VerticalAlignBottomTwoTone'
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone'
import DeviceThermostatTwoToneIcon from '@mui/icons-material/DeviceThermostatTwoTone'
import { HorizontalBox } from '../HorizontalBox'
import { ForecastHourStyled } from './style'

export const ForecastHour = ({
  time,
  cloudcover,
  surface_pressure,
  windspeed_10m,
  temperature_2m,
}: Hour) => {
  const timeFormat = getTime(time)
  return (
    <HorizontalBox elevation={0} square>
      <ForecastHourStyled>
        <Typography variant="h6" color="primary">
          {timeFormat}
        </Typography>
        <Box>
          <FilterDramaTwoToneIcon />
          <Typography>{cloudcover}</Typography>
        </Box>

        <Box>
          <VerticalAlignBottomTwoToneIcon />
          <Typography>{surface_pressure}</Typography>
        </Box>

        <Box>
          <AirTwoToneIcon />
          <Typography>{windspeed_10m}</Typography>
        </Box>
        <Box />
        <Typography variant="h6" color="white">
          {temperature_2m} °C
        </Typography>
      </ForecastHourStyled>
    </HorizontalBox>
  )
}
