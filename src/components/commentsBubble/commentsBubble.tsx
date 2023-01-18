import { Box, Typography } from '@mui/material'
import { GraphQlComment } from '../../dataAccess'
import { theme } from '../theme'

interface CommentsBubbleProps {
  comments: GraphQlComment[]
}

export const CommentsBubble = (props: CommentsBubbleProps) => {
  const { comments } = props

  const stringToShow = comments.length.toString() ?? '?'
  const isCommentsExisting = comments.length > 0
  const title = `Click to ${isCommentsExisting ? 'see' : 'add'} comments`
  const size = 24

  return (
    <Box
      data-testid='comments-bubble'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '100%',
        backgroundColor: theme.palette.common.black,
      }}
    >
      <Typography title={title} color={theme.palette.common.white} data-testid='comments-bubble-comment'>
        {stringToShow}
      </Typography>
    </Box>
  )
}
