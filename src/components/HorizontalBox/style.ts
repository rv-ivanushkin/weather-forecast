import { Paper, styled } from '@mui/material'

export const HorizontalBox = styled(Paper)`
  display: grid;
  grid-template-rows: 1fr;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.grey[200]} 0%,
    ${({ theme }) => theme.palette.primary.dark} 100%
  );
`
