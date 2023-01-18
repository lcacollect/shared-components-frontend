import { Typography, Stack } from '@mui/material'

interface NoRowsOverlayProps {
  text: string
}
export const NoRowsOverlay = ({ text = 'No Rows' }: NoRowsOverlayProps) => {
  return (
    <Stack alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
      <Typography>{text}</Typography>
    </Stack>
  )
}
