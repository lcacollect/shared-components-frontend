import React, { CSSProperties } from 'react'
import { LCACollectLogo } from '../../assets'
import { Link } from 'react-router-dom'
import { SxProps, Theme } from '@mui/material'

interface LogoProps {
  sx?: SxProps<Theme>
}
export function Logo(props: LogoProps) {
  const { sx } = props
  return (
    <Link to='/' aria-label='logo' data-testid='logo'>
      <img alt='lca-collect-logo' style={sx as CSSProperties} src={LCACollectLogo} />
    </Link>
  )
}
