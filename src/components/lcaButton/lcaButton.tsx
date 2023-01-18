import React, { ReactNode } from 'react'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { theme } from '../theme'

interface LcaButtonProps extends MuiButtonProps {
  children: ReactNode
  'data-testid'?: string
}

export const LcaButton = (props: LcaButtonProps) => {
  const { children } = props

  return (
    <MuiButton
      data-testid={props['data-testid']}
      color='primary'
      variant='contained'
      sx={{ color: theme.palette.common.white }}
      {...props}
    >
      {children}
    </MuiButton>
  )
}
