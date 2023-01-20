import '@testing-library/jest-dom'
import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ProfileAvatar } from './profileAvatar'

describe('profileAvatar', () => {
  afterEach(cleanup)

  it('should render successfully', async () => {
    const { container } = render(<ProfileAvatar />)
    expect(container).toBeTruthy()
    expect(await screen.findByTestId('profile-avatar')).toBeInTheDocument()
    expect(await screen.findByTestId('profile-avatar')).toHaveTextContent('')
    expect(await screen.findByTestId('profile-avatar')).toHaveClass('MuiAvatar-root')
  })

  it('renders default icon when name is not provided', () => {
    const { getByTestId } = render(<ProfileAvatar />)
    expect(getByTestId('profile-avatar')).toContainElement(getByTestId('icon'))
  })

  it('renders avatar with an image', async () => {
    const { container } = render(<ProfileAvatar imageSrc='image.jpg' />)
    expect(container).toBeTruthy()
    expect(await screen.findByTestId('profile-avatar')).toBeInTheDocument()
    expect(container.innerHTML).toContain('image.jpg')
  })
})
