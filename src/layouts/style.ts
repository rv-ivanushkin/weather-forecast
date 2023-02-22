import { Box, styled } from '@mui/material'

export const LayoutsStyled = styled(Box)`
  display: grid;
  grid-template-columns: 0.7fr;
  grid-template-rows: auto 1fr auto;
  justify-content: center;
  background: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[300]
      : theme.palette.background.default};
  padding: 10px;
  gap: 20px;
`
