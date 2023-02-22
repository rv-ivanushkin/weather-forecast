import { createTheme, Paper, ThemeProvider } from '@mui/material'
import React, { useMemo } from 'react'
import { WeatherForecastInfo } from 'src/components'
import { CityForForecast, selectThemeMode, ToggleThemeMode } from 'src/features'
import { useAppSelector } from 'src/hooks'
import { defaultOptions } from 'src/theme'
import { LayoutsStyled } from './style'

export const Layouts = () => {
  const themeModeSelect = useAppSelector(selectThemeMode)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeModeSelect,
        },
        ...defaultOptions,
      }),
    [themeModeSelect]
  )

  return (
    <ThemeProvider theme={theme}>
      <LayoutsStyled>
        <CityForForecast />
        <Paper />
        <WeatherForecastInfo />
      </LayoutsStyled>
    </ThemeProvider>
  )
}
