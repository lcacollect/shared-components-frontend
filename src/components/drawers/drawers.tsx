import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { Box, IconButton, Paper } from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NotificationsDialog } from '../notificationsDialog'
import { theme } from '../theme'
import helpTexts from './helpTexts'

export const Drawers = () => {
  const { pathname } = useLocation()
  const pathnameSplitArr = pathname.split('/')
  const isHomePath = pathnameSplitArr.length === 3
  const path = isHomePath ? 'projectHome' : pathnameSplitArr[pathnameSplitArr.length - 1]

  const helpTextItems = helpTexts[path]

  const [helpTextOpen, setHelpTextOpen] = useState(false)

  const items = helpTextItems?.map((notification, index) => (
    <NotificationsDialog
      test-dataid={`help-text-${index}`}
      key={index}
      title={notification.title}
      body={notification.body}
      buttonTexts={notification.buttonTexts}
      sx={{
        marginBottom: '32px',
        marginLeft: helpTextOpen ? 8 : '100px',
        '&:first-of-type': { marginTop: '64px' },
      }}
    />
  ))

  return (
    <Box
      aria-label='BoxDrawer'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        width: '100%',
        right: 0,
        maxWidth: helpTextOpen ? '475px' : '70px',
        position: 'absolute',
        height: '670px',
        zIndex: 5,
      }}
    >
      <Paper
        aria-label='Drawer'
        data-testid='drawer'
        elevation={5}
        sx={{
          borderRadius: '25px 0 0 25px',
          paddingTop: 2,
          right: 0,
          width: helpTextOpen ? '455px' : '70px',
          position: 'fixed',
          marginLeft: 'auto',
          height: '648px',
          overflow: helpTextOpen ? 'auto' : 'hidden',
          zIndex: 5,
          boxShadow:
            '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
        }}
      >
        <Box sx={{ paddingLeft: '10px' }}>
          <IconButton onClick={() => setHelpTextOpen(!helpTextOpen)}>
            <QuestionMarkIcon sx={{ color: theme.palette.common.black }} />
          </IconButton>
        </Box>
        {items}
      </Paper>
    </Box>
  )
}
