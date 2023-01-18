import { Box, Typography } from '@mui/material'
import { MouseEvent } from 'react'
import { theme } from '../theme'

interface OneCharBubbleProps {
  stringToShow: string | null | undefined
  title?: string | null
  remainder?: boolean
  showFullString?: boolean
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export const OneCharBubble = (props: OneCharBubbleProps) => {
  const { title, stringToShow, remainder, showFullString, onClick } = props
  const size = 24

  const formattedString = stringToShow === 'Unassigned' ? '+' : stringToShow?.substring(0, 1).toUpperCase() ?? '❓'

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => (onClick ? onClick(e) : null)

  return (
    <>
      <Box
        key={(Math.random() + 1).toString(36)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          minWidth: size,
          height: size,
          minHeight: size,
          borderRadius: '100%',
          border: `2px solid ${theme.palette.common.white}`,
          backgroundColor: theme.palette.grey[100],
          marginRight: '-6px',
          cursor: onClick ? 'pointer' : null,
        }}
        onClick={handleOnClick}
      >
        <Typography title={title ? title : ''} color={theme.palette.common.white}>
          {`${remainder ? '+' : ''}${formattedString}`}
        </Typography>
      </Box>
      {showFullString ? (
        <Typography sx={{ paddingLeft: '.75rem', cursor: onClick ? 'pointer' : null }} onClick={handleOnClick}>
          {stringToShow}
        </Typography>
      ) : (
        ''
      )}
    </>
  )
}
