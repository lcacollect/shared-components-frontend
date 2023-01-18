import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { GlobalCompositeIcon } from './globalCompositeIcon'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@mui/icons-material/HomeOutlined'

describe('globalCompositeIcon', () => {
  it('should render successfully', async () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GlobalCompositeIcon MainIcon={Home} />}></Route>
        </Routes>
      </BrowserRouter>,
    )
    expect(container).toBeTruthy()
    expect(await screen.findByTestId('global-composite-icon')).toBeInTheDocument()
    expect(await screen.findByTestId('main-icon')).toBeInTheDocument()
  })
})
