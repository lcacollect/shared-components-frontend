import { useMsal } from '@azure/msal-react'
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import KeyIcon from '@mui/icons-material/VpnKeyOutlined'
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useGetAccountRolesQuery } from '../../dataAccess'
import { ProfileAvatar } from '../profileAvatar'
import { theme } from '../theme'

export const ProfileDialog = () => {
  const navigate = useNavigate()
  const msal = useMsal()
  const activeAccount = msal.instance.getAllAccounts().length > 0 ? msal.instance.getAllAccounts()[0] : msal.accounts[0]
  const logoutRequest = {
    account: msal.instance.getAccountByHomeId(activeAccount.homeAccountId),
    postLogoutRedirectUri: '/',
  }
  const { data } = useGetAccountRolesQuery()
  const isSuperAdmin = data?.account.roles?.includes('lca_super_admin')

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 280,
        bgcolor: theme.palette.common.white,
        borderRadius: 3,
        position: 'absolute',
        top: 75,
        right: 40,
        boxShadow:
          '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
      }}
      dense
    >
      <ListItem>
        <ListItemAvatar>
          <ProfileAvatar />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography fontWeight='bold'>{activeAccount?.name}</Typography>}
          secondary={activeAccount?.username}
        />
      </ListItem>
      <Divider component='li' sx={{ margin: '0.5em 0' }} />
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/')}>
          <ListItemIcon>
            <HomeIcon sx={{ fontSize: '2rem', width: '1.3em' }} />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton href='https://myaccount.microsoft.com/' target='_blank'>
          <ListItemIcon>
            <AccountCircleIcon sx={{ fontSize: '2rem', width: '1.3em' }} />
          </ListItemIcon>
          <ListItemText primary='Manage Profile' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton href='https://account.activedirectory.windowsazure.com/ChangePassword.aspx' target='_blank'>
          <ListItemIcon>
            <KeyIcon sx={{ fontSize: '2rem', width: '1.3em' }} />
          </ListItemIcon>
          <ListItemText primary='Password Settings' />
        </ListItemButton>
      </ListItem>
      {isSuperAdmin ? (
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/admin')}>
            <ListItemIcon>
              <AdminPanelSettingsIcon sx={{ fontSize: '2rem', width: '1.3em' }} />
            </ListItemIcon>
            <ListItemText primary='Admin Page' />
          </ListItemButton>
        </ListItem>
      ) : null}
      <Divider component='li' sx={{ margin: '0.5em 0' }} />
      <ListItem disablePadding>
        <ListItemButton onClick={async () => await msal.instance.logout(logoutRequest)}>
          <ListItemIcon>
            <LogoutIcon sx={{ fontSize: '2rem', width: '1.3em' }} />
          </ListItemIcon>
          <ListItemText primary='Logout' />
        </ListItemButton>
      </ListItem>
    </List>
  )
}
