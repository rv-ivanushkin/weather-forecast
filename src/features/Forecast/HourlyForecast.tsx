import React from 'react'
import { ForecastHour } from 'src/components'
import { useHorizontalScroll, useHourlyForecast } from './hooks'
import { HoursStyled, PaperStyled } from './style'

export const HourlyForecast = () => {
  const ref = useHorizontalScroll()
  const hours = useHourlyForecast()

  return (
    <PaperStyled>
      <HoursStyled ref={ref}>
        {hours &&
          hours.map((props, index) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ForecastHour key={`temperature${index.toString()}`} {...props} />
          ))}
      </HoursStyled>
    </PaperStyled>
  )
}
