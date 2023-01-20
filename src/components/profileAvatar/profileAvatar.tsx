import { useMsal } from '@azure/msal-react'
import { Avatar, Icon } from '@mui/material'
import Person2Icon from '@mui/icons-material/Person2'
import * as React from 'react'

interface ProfileAvatarProps {
  imageSrc?: string
}

export const ProfileAvatar = (props: ProfileAvatarProps) => {
  const { imageSrc } = props
  const msal = useMsal()
  const activeAccount = msal.instance.getAllAccounts().length > 0 ? msal.instance.getAllAccounts()[0] : msal.accounts[0]
  const name = activeAccount?.name
  const nameToShow = name ? name[0].toUpperCase() : ''

  return (
    <>
      {nameToShow.length !== 0 ? (
        <Avatar alt={name} src={imageSrc} data-testid='profile-avatar'>
          {nameToShow}
        </Avatar>
      ) : (
        <Avatar alt={name} src={imageSrc} data-testid='profile-avatar'>
          <Icon>
            <Person2Icon data-testid='icon' />
          </Icon>
        </Avatar>
      )}
    </>
  )
}
