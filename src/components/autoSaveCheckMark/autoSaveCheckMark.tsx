import { ApolloError } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { InputAdornment, useTheme } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { Loading } from '../'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export const AutoSaveCheckMark = ({ loading = false, error }: { loading?: boolean; error?: ApolloError }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [_error, setError] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    if (loading) {
      setIsLoading(true)
    } else if (isLoading && !loading && !error) {
      setIsLoading(false)
      setSuccess(true)
      const timer = setTimeout(() => setSuccess(false), 2000)
      return () => clearTimeout(timer)
    } else if (!loading && error) {
      setIsLoading(false)
      setError(true)
      const timer = setTimeout(() => setError(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [loading])

  if (success) {
    return (
      <InputAdornment position='end' data-testid={'autosave-success'}>
        <CheckIcon sx={{ color: theme.palette.success.main }} />
      </InputAdornment>
    )
  }
  if (_error) {
    return (
      <InputAdornment position='end' data-testid={'autosave-error'}>
        <ErrorOutlineIcon sx={{ color: theme.palette.error.main }} />
      </InputAdornment>
    )
  }
  if (!isLoading) {
    return null
  }

  return (
    <InputAdornment position='end' data-testid={'autosave-loading'}>
      <Loading loading={true} />
    </InputAdornment>
  )
}
