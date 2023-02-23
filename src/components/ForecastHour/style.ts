import { styled } from '@mui/material'

export const ForecastHourStyled = styled('div')`
  height: inherit;
  padding: 20px 0;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 40px;
  grid-template-rows: repeat(4, auto) 1fr auto;

  & > .MuiBox-root {
    display: grid;
    justify-content: center;
    justify-items: center;
  }
`
