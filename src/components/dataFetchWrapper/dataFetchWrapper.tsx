import { ApolloError } from '@apollo/client'
import { ReactNode } from 'react'
import { Loading } from '../loading'
import { ErrorMessage } from '../errorMessage'
import { ErrorBoundary } from '../errorBoundary'

interface DataFetchWrapperProps {
  loading?: boolean
  error: ApolloError | undefined
  children: ReactNode
}

export const DataFetchWrapper = <P extends DataFetchWrapperProps>(props: P & DataFetchWrapperProps) => {
  const { loading, error, children } = props

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return <ErrorBoundary {...(props as P)}>{children}</ErrorBoundary>
}
