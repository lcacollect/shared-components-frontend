import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

interface SideMenuProps {
  menuGroups: MenuGroupProps[]
}

export const SideMenu: React.FC<SideMenuProps> = ({ menuGroups }) => {
  const [openState, setOpenState] = useState<string | null>(null)
  const openSideMenuLimit = 1300

  useEffect(() => {
    if (window.innerWidth > openSideMenuLimit && openState === null) {
      setOpenState('block')
    }
    if (window.innerWidth <= openSideMenuLimit && openState === null) {
      setOpenState('none')
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= openSideMenuLimit && openState === 'block') {
        setOpenState('none')
      } else if (window.innerWidth > openSideMenuLimit && openState === 'none') {
        setOpenState('block')
      }
    })
  }, [])

  const handleClick = () => {
    if (openState === 'block') setOpenState('none')
    else setOpenState('block')
  }
  return (
    <Paper
      aria-label='SideMenu'
      elevation={5}
      sx={{ borderRadius: '0 25px 25px 0', maxWidth: 300, maxHeight: 600, position: 'sticky', top: '100px' }}
    >
      <Stack direction={'column'} spacing={0} sx={{ padding: 'unset' }}>
        {menuGroups.map((group, index) => (
          <MenuGroup
            handleClick={handleClick}
            showExpandIcon={index === 0}
            key={index}
            items={group.items}
            displayState={openState}
          />
        ))}
      </Stack>
    </Paper>
  )
}

export interface MenuItem {
  icon: React.ReactNode
  link: string
  title: string
}

export interface MenuGroupProps {
  items: MenuItem[]
  showExpandIcon?: boolean
  displayState?: string | null
  handleClick?: () => void
}

const MenuGroup: React.FC<MenuGroupProps> = (props) => {
  const { showExpandIcon, items, displayState, handleClick } = props
  const navigate = useNavigate()

  return (
    <Stack direction={'column'} sx={{ paddingX: 1, paddingTop: 2 }}>
      {showExpandIcon && (
        <Box
          sx={{
            marginLeft: 'auto',
            paddingLeft: displayState === 'block' ? 0 : '16px',
            paddingRight: displayState === 'block' ? '12px' : 0,
          }}
        >
          {displayState === 'block' ? (
            <KeyboardArrowRightIcon
              data-testid='collpseBtn'
              onClick={handleClick}
              sx={{
                boxShadow: '0px 1px 3px #00000061;',
                borderRadius: '100%',
                marginRight: 'unset',
                '&:hover': { transform: 'rotateY(180deg)', cursor: 'pointer' },
              }}
            />
          ) : (
            <KeyboardArrowRightIcon
              data-testid='collpseBtn'
              onClick={handleClick}
              sx={{
                boxShadow: '0px 1px 3px #00000061;',
                borderRadius: '100%',
                transform: 'rotateY(180deg)',
                marginRight: '25px',
                '&:hover': { transform: 'rotateY(0deg)', cursor: 'pointer' },
              }}
            />
          )}
        </Box>
      )}
      <MenuList sx={{ marginRight: 'unset' }}>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={() => navigate(item.link)} sx={{ paddingRight: 'unset' }}>
            <ListItemText data-testid={item.title} sx={{ display: displayState }}>
              {item.title}
            </ListItemText>
            <ListItemIcon
              sx={{
                color: 'red',
                minWidth: '24px',
              }}
            >
              {item.icon}
            </ListItemIcon>
          </MenuItem>
        ))}
      </MenuList>
    </Stack>
  )
}
