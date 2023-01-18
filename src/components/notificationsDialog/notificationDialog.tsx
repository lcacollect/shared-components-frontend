import { Container, Paper, SxProps, Theme, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'

export type NotificationsDialogProps = {
  title: string
  body: string
  buttonTexts?: string[]
  sx?: SxProps<Theme> | null
}

export const NotificationsDialog: React.FC<NotificationsDialogProps> = (props) => {
  const { buttonTexts, sx, title, body } = props

  const buttons = buttonTexts?.map((buttonText, index) => <Button key={index}>{buttonText}</Button>)

  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: 1,
        width: 280,
        padding: 2,
        margin: 1,
        ...sx,
      }}
      data-testid='notifications-dialog'
    >
      <Typography
        id='notifications-dialog-title'
        data-testid='notifications-dialog-title'
        fontWeight='bold'
        fontSize='1.3rem'
        sx={{ pb: 1 }}
      >
        {title}
      </Typography>
      <Typography
        fontSize='1rem'
        data-testid='notifications-dialog-body'
        sx={{ whiteSpace: 'pre-wrap', pb: buttons ? null : 1 }}
      >
        {body}
      </Typography>
      {buttons ? <Container data-testid='notifications-dialog-buttons'>{buttons}</Container> : null}
    </Paper>
  )
}
