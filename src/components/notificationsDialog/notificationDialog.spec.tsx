import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { NotificationsDialog } from './notificationDialog'

describe('notificationsDialog', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <NotificationsDialog title='notification title' body='body text' buttonTexts={['ok', 'cancel']} />,
    )
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('notifications-dialog')).toBeInTheDocument()
    expect(await screen.findByTestId('notifications-dialog-title')).toBeInTheDocument()
    expect(await screen.findByTestId('notifications-dialog-body')).toBeInTheDocument()
    expect(await screen.findByTestId('notifications-dialog-buttons')).toBeInTheDocument()
  })
})
