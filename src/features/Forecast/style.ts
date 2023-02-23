import { Paper, styled } from '@mui/material'

export const ForecastStyled = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: inherit;
`

export const PaperStyled = styled(Paper)`
  position: relative;
`

export const PaperContentStyled = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

export const HoursStyled = styled(PaperContentStyled)`
  display: grid;
  overflow-x: hidden;
  grid-auto-flow: column;
  grid-auto-columns: 100px;
  background: ${({ theme }) => theme.palette.grey[200]};
  gap: 1px;
  border-radius: inherit;
  scrollbar-width: thin;

  // for future
  /* &:hover {
    overflow-x: auto;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: inherit;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.grey[400]};
    border-radius: inherit;
  } */
`

export const CitySelectStyled = styled(Paper)`
  padding: 10px;
`
