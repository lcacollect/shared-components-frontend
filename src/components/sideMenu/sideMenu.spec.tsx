import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { Home } from '@mui/icons-material'
import { render, fireEvent, screen } from '@testing-library/react'
import { SideMenu } from './sideMenu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

describe('SideMenu', () => {
  beforeEach(() => {
    const projectMenuItems = [
      {
        icon: <Home sx={{ color: 'black' }} />,
        link: '/projects/null',
        title: 'Project',
      },
    ]

    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SideMenu menuGroups={[{ title: 'Project', items: projectMenuItems }]} />}></Route>
        </Routes>
      </BrowserRouter>,
    )
  })
  it('Should show the left side pane as collapsed if screen width < 1300', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1100,
    })
    const linkTxt = screen.getByTestId('Project')

    expect(window.innerWidth).toBe(1100)

    setTimeout(() => {
      expect(linkTxt).toHaveStyle('display: none')
    }, 1000)
  })

  it('Should show the left side pane as expanded if screen width > 1300', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1400,
    })
    expect(window.innerWidth).toBeGreaterThan(1300)

    const linkTxt = screen.getByTestId('Project')

    setTimeout(() => {
      expect(linkTxt).toHaveStyle('display: block')
    }, 1000)
  })

  it('Should collapse/expand the panel if pressed on the collapse/expand button', () => {
    const collapseBtn = screen.getByTestId('collpseBtn')
    const linkTxt = screen.getByTestId('Project')
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1400,
    })

    expect(window.innerWidth).toBeGreaterThan(1300)
    expect(linkTxt).toHaveStyle('display: block')
    fireEvent.click(collapseBtn)

    setTimeout(() => {
      expect(linkTxt).toHaveStyle('display: none')
    }, 1000)

    fireEvent.click(collapseBtn)

    setTimeout(() => {
      expect(linkTxt).toHaveStyle('display: block')
    }, 1000)
  })
})
