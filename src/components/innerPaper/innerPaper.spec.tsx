import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { InnerPaper } from './innerPaper'
import React from 'react'

describe('innerPaper', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <InnerPaper data-testid='inner-paper'>
        <div data-testid='child'></div>
      </InnerPaper>,
    )
    const child = await screen.findByTestId('child')
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('inner-paper')).toBeInTheDocument()
    expect(await screen.findByTestId('inner-paper')).toContainElement(child)
  })
})
