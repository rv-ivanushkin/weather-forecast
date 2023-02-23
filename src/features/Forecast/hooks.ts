import { debounce } from '@mui/material'
import { useRef, useEffect, useState, useMemo } from 'react'
import { useActionCreators, useAppDispatch, useAppSelector } from 'src/hooks'
import { searchCityByName } from './services'
import {
  forecastSlice,
  getForecastHourlyWeatherAction,
  selectLocation,
} from './slice'
import { HourlyWeatherResponseProps, Hour, SearchCityProps } from './types'
import { getHoursFromForecast } from './utils'

export function useHorizontalScroll() {
  const elementRef = useRef<HTMLDivElement>(null)

  const handlerWheel = (event: WheelEvent) => {
    if (elementRef.current) {
      event.preventDefault()
      if (event.deltaY !== 0) {
        elementRef.current.scroll({
          left: elementRef.current.scrollLeft + event.deltaY,
        })
      }
    }
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const { current } = elementRef
    if (current) {
      current.addEventListener('wheel', handlerWheel)
      return () => current.removeEventListener('wheel', handlerWheel)
    }
  }, [])

  return elementRef
}

export const useHourlyForecast = (): Hour[] | null => {
  const locationSelect = useAppSelector(selectLocation)
  const dispatch = useAppDispatch()
  const [forecast, setForecast] = useState<HourlyWeatherResponseProps | null>(
    null
  )

  useEffect(() => {
    const action = async () => {
      if (locationSelect) {
        const data = await dispatch(
          getForecastHourlyWeatherAction(locationSelect)
        ).unwrap()
        setForecast(data)
      }
    }

    action()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationSelect])

  return forecast ? getHoursFromForecast(forecast) : null
}

export const useCitySearch = () => {
  const locationSelect = useAppSelector(selectLocation)
  const actions = useActionCreators(forecastSlice.actions)
  const [value, setValue] = useState<SearchCityProps | null | undefined>(
    locationSelect as SearchCityProps
  )
  const [options, setOptions] = useState<SearchCityProps[]>([])

  const placeholder =
    (value && `${value.latitude}, ${value.latitude}, ${value.timezone}`) ||
    'Select City'

  const handlerSearch = async (name: string) => {
    if (name) {
      const { data } = await searchCityByName(name)
      if (data && data.results) {
        setOptions(data.results)
      } else {
        setOptions([])
      }
    }
  }

  const handelInputChange = useMemo(
    () => debounce(handlerSearch, 1000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const handlerChange = (event: any, newValue: SearchCityProps | null) => {
    setValue(newValue)
    if (newValue) {
      actions.setPosition({
        latitude: newValue.latitude,
        longitude: newValue.longitude,
        name: newValue.name,
        timezone: newValue.timezone,
        country: newValue.country,
      })
    } else {
      actions.setPosition(null)
    }
  }

  return {
    value,
    options,
    placeholder,
    handelInputChange,
    handlerChange,
  }
}
