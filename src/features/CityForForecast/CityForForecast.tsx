import React, { useMemo, useState } from 'react'
import {
  Autocomplete,
  Avatar,
  debounce,
  ListItem,
  ListItemAvatar,
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

  const placeholder =
    (value && `${value.latitude}, ${value.latitude}, ${value.timezone}`) ||
    'Select City'

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
        <TextField {...params} label={placeholder} fullWidth />
      )}
      renderOption={(props, option: CityProps) => (
        // eslint-disable-next-line react/self-closing-comp, react/jsx-props-no-spreading
        <ListItem {...props} key={`${option.id}`} dense>
          <ListItemAvatar>
            <Avatar
              src={`${SVG_ULR}${option.country_code.toLowerCase()}.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={`${option.latitude}, ${option.latitude}, ${option.timezone}`}
          >
            <Typography variant="body2">{option.name}</Typography>
          </ListItemText>
        </ListItem>
      )}
    />
  )
}
