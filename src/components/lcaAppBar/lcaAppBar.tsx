import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Fragment, ReactElement, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Breadcrumb } from '../breadcrumb'
import { useGetSingleProjectQuery } from '../../dataAccess'
import { Logo } from '../logo'
import { ProfileAvatar } from '../profileAvatar'
import { ProfileDialog } from '../profileDialog'
import { theme } from '../theme'
import { DataFetchWrapper } from '../dataFetchWrapper'

interface LcaAppBarProps {
  logo?: ReactElement
}

export const LcaAppBar = (props: LcaAppBarProps) => {
  const {
    logo = (
      <Logo sx={{ marginLeft: '-5px', paddingTop: '18px', paddingBottom: '17px', height: '5vh', maxHeight: '75px' }} />
    ),
  } = props

  const reg = /([0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12})\/?(\w+)?/m

  const location = useLocation()
  const { projectId } = useParams()
  const { data, loading, error } = useGetSingleProjectQuery({
    variables: { id: projectId as string },
    skip: !projectId,
  })

  const [dialogOpen, setDialogOpen] = useState(false)

  const match = reg.exec(location.pathname)
  const projectPage = match?.length === 3 ? match[2] : ''
  const projectName = loading || error ? 'No Name' : data?.projects[0]?.name ?? 'No Name'

  return (
    <Box sx={{ zIndex: 100, flexGrow: 1, position: 'sticky', top: '0px' }} aria-label='AppBar' data-testid='app-bar'>
      <AppBar
        position='sticky'
        color='default'
        elevation={5}
        sx={{ backgroundColor: theme.palette.grey[50], maxHeight: '100px' }}
      >
        <Toolbar>
          {logo}
          {projectId ? (
            <DataFetchWrapper error={error} loading={loading}>
              <Fragment>
                <Breadcrumb projectName={projectName} currentPage={projectPage} data-testid='breadcrumb-in-app-bar' />
                <Typography sx={{ flexGrow: 1 }} />
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 3, padding: 'unset', height: '3.9vh' }}
                  onClick={() => setDialogOpen((prevState) => !prevState)}
                >
                  <ProfileAvatar />
                </IconButton>
                {dialogOpen ? <ProfileDialog /> : null}
              </Fragment>
            </DataFetchWrapper>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
