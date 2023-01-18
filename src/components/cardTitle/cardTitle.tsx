import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { TypographyProps } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'

interface CardTitleProps extends TypographyProps {
  title: string
  size: 'large' | 'medium' | 'small'
  onClickHandler?: (e: React.MouseEvent<HTMLElement>) => void
  'data-testid'?: string
}

export const CardTitle = (props: CardTitleProps) => {
  const { title, size, onClickHandler } = props
  let buttonSize
  let variant: 'h1' | 'h3' | 'h6'
  // Small to large font increase by size * 1,1 per size category
  switch (size) {
    case 'large':
      buttonSize = 15
      variant = 'h1'
      break

    case 'medium':
      buttonSize = 13
      variant = 'h3'
      break

    case 'small':
      buttonSize = 11
      variant = 'h6'
      break

    default:
      buttonSize = 11
      variant = 'h6'
      break
  }
  return (
    <Typography variant={variant} data-testid={props['data-testid']}>
      {title}
      {onClickHandler && (
        <IconButton
          onClick={onClickHandler}
          sx={{ padding: 'unset', marginLeft: '10px', width: `${buttonSize * 1.5}px`, height: `${buttonSize * 1.5}px` }}
        >
          <AddIcon
            sx={{
              boxShadow: '0px 1px 2px #00000061',
              fill: '#333',
              borderRadius: '100%',
              height: `${buttonSize}px`,
              width: `${buttonSize}px`,
              padding: `${buttonSize / 4}px`,
            }}
          />
        </IconButton>
      )}
    </Typography>
  )
}