import { Paper, SxProps } from '@mui/material'
import React, { FC, ReactNode } from 'react'

interface InnerPaperProps {
  children: ReactNode
  'data-testid'?: string
  sx?: SxProps
}
export const InnerPaper: FC<InnerPaperProps> = (props) => {
  return (
    <Paper
      elevation={1}
      sx={{ borderRadius: 5 / 4, margin: '20px', padding: '25px', ...props.sx }}
      data-testid={props['data-testid'] || ''}
    >
      {props.children}
    </Paper>
  )
}
