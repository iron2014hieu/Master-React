import React, { Fragment } from 'react'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { Redirect } from 'react-router-dom'
import { path } from 'src/constants/path'

export default function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()

  if (!authenticated) {
    return <Redirect to={path.login} />
  }

  return <Fragment>{children}</Fragment>
}
