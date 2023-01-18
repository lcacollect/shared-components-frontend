import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Logo } from './logo'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

describe('logo', () => {
  it('should render successfully', async () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Logo />}></Route>
        </Routes>
      </BrowserRouter>,
    )
    expect(container).toBeTruthy()
    expect(await screen.findByTestId('logo')).toBeInTheDocument()
    expect(await screen.findByTestId('logo')).toHaveAttribute('href', '/')
  })
})
