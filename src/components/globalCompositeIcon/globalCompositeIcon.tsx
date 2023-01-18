import Globe from '@mui/icons-material/Language'
import React from 'react'
import { theme } from '../theme'

interface GlobalCompositeIconProps {
  MainIcon: any
}

export const GlobalCompositeIcon: React.FC<GlobalCompositeIconProps> = ({ MainIcon }) => {
  return (
    <div style={{ width: 50, height: 50 }} data-testid='global-composite-icon'>
      <div style={{ position: 'absolute', top: 0, left: 2 }}>
        <Globe sx={{ height: 15, color: theme.palette.common.black }} />
      </div>
      <MainIcon sx={{ height: 20, color: theme.palette.common.black }} data-testid='main-icon' />
    </div>
  )
}
