import { useMsal } from '@azure/msal-react'
import { Avatar } from '@mui/material'

export const ProfileAvatar = () => {
  const msal = useMsal()
  const activeAccount = msal.instance.getAllAccounts().length > 0 ? msal.instance.getAllAccounts()[0] : msal.accounts[0]
  const name = activeAccount?.name ?? 'profile name'
  const nameToShow = name ? name[0].toUpperCase() : 'Unknown'
  const imgSrc = ''

  return (
    <Avatar alt={name} src={imgSrc}>
      {nameToShow}
    </Avatar>
  )
}
