import { render } from '@testing-library/react'
import { ErrorMessage } from './errorMessage'
import React from 'react'

describe('Error', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorMessage />)
    expect(baseElement).toBeTruthy()
  })
  it('should return null if no error ', () => {
    const { container } = render(<ErrorMessage />)
    expect(container.innerHTML).toHaveLength(0)
  })
})
