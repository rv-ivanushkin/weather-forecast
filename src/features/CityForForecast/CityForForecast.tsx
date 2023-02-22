import React, { useMemo, useState } from 'react'
import {
  Autocomplete,
  debounce,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import { useActionCreatorsTyped, useAppDispatch } from 'src/hooks'
import { cityForForecastSlice, searchCityByName } from './slice'
import { CityProps } from './types'
import { SVG_ULR } from './constants'

const getOptionLabel = (option: CityProps) =>
  typeof option === 'string' ? option : option.name

const isOptionEqualToValue = (option: CityProps, state: CityProps) =>
  option.id === state.id

export const CityForForecast = () => {
  const actions = useActionCreatorsTyped(cityForForecastSlice.actions)
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<CityProps | null | undefined>(null)
  const [options, setOptions] = useState<CityProps[]>([])

  const handlerSearch = async (name: string) => {
    if (name) {
      const { results } = await dispatch(searchCityByName(name)).unwrap()
      if (results) {
        setOptions(results)
      }
    }
  }

  const handelInputChange = useMemo(
    () => debounce(handlerSearch, 1000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const handlerChange = (event: any, newValue: CityProps | null) => {
    setValue(newValue)
    if (newValue?.latitude && newValue.longitude) {
      actions.setPosition({
        latitude: newValue?.latitude,
        longitude: newValue.longitude,
      })
    } else {
      actions.setPosition({})
    }
  }

  return (
    <Autocomplete
      value={value}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      onChange={handlerChange}
      autoComplete
      options={options}
      noOptionsText="No locations"
      onInputChange={(event, newInputValue) => {
        handelInputChange(newInputValue)
      }}
      renderInput={(params) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TextField {...params} label="Select City" fullWidth />
      )}
      renderOption={(props, option: CityProps) => (
        // eslint-disable-next-line react/self-closing-comp, react/jsx-props-no-spreading
        <ListItem {...props} key={`${option.id}`} dense>
          <ListItemIcon>
            <img
              src={`${SVG_ULR}${option.country_code.toLowerCase()}.svg`}
              width="24"
              alt=""
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="subtitle1">{option.name}</Typography>
            <Typography variant="caption" color="grey">
              ({`${option.latitude}, ${option.latitude}`}), {option.timezone}
            </Typography>
          </ListItemText>
        </ListItem>
      )}
    />
  )
}
