import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CardTitle } from './cardTitle'

describe('cardTitle', () => {
  afterEach(cleanup)

  it('renders title and add icon', async () => {
    const title = 'Test Title'
    const { baseElement } = render(<CardTitle title={title} size='medium' data-testid='card-title' />)
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('card-title')).toBeInTheDocument()
    expect(await screen.findByTestId('card-title')).toHaveTextContent(title)
    expect(await screen.findByTestId('card-title')).toHaveClass('MuiTypography-root')
  })

  it('button is clikable', () => {
    const title = 'Test Title'
    let counter = 1
    const { getByTestId } = render(
      <CardTitle title={title} size='medium' onClickHandler={() => (counter = counter + 1)} />,
    )
    fireEvent.click(getByTestId('add-icon-button'))
    expect(counter).toEqual(2)
  })
})
