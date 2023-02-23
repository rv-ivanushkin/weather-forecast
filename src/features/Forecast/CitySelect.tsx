import {
  Autocomplete,
  Avatar,
  debounce,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import { SVG_ULR } from './constants'
import { useCitySearch } from './hooks'
import { CitySelectStyled } from './style'
import { SearchCityProps } from './types'

const getOptionLabel = (option: SearchCityProps) =>
  typeof option === 'string' ? option : option.name

const isOptionEqualToValue = (
  option: SearchCityProps,
  state: SearchCityProps
) => option.id === state.id

export const CitySelect = () => {
  const { value, options, placeholder, handelInputChange, handlerChange } =
    useCitySearch()

  return (
    <CitySelectStyled>
      <Autocomplete
        value={value}
        isOptionEqualToValue={isOptionEqualToValue}
        getOptionLabel={getOptionLabel}
        sx={{ width: 300 }}
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        noOptionsText="No locations"
        onChange={handlerChange}
        onInputChange={(event, newInputValue) => {
          handelInputChange(newInputValue)
        }}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label={placeholder}
            fullWidth
          />
        )}
        renderOption={(props, option) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
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
    </CitySelectStyled>
  )
}
