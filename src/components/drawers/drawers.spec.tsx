import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Drawers } from './drawers'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Drawers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Drawers />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(baseElement).toBeTruthy()
  })

  it('should display content', async () => {
    const { baseElement, getByRole } = render(
      <MemoryRouter initialEntries={['/projects/741dfc36-23fa-4582-8746-1879fddab9c7/sources']}>
        <Routes>
          <Route path='/projects/:projectId/sources' element={<Drawers />} />
        </Routes>
      </MemoryRouter>,
    )
    expect(baseElement).toBeTruthy()

    expect(await screen.getByTestId('QuestionMarkIcon')).toBeInTheDocument()
    const button = getByRole('button')
    fireEvent.click(button)
    expect(await screen.findByTestId('notifications-dialog-body')).toBeInTheDocument()
  })

  it('should open and close the notifications dialog', () => {
    const { getByRole, getByTestId } = render(
      <MemoryRouter initialEntries={['/projects/741dfc36-23fa-4582-8746-1879fddab9c7/sources']}>
        <Routes>
          <Route path='/projects/:projectId/sources' element={<Drawers />} />
        </Routes>
      </MemoryRouter>,
    )

    const button = getByRole('button')
    const drawer = getByTestId('drawer')

    expect(getComputedStyle(drawer).overflow).toBe('hidden')
    expect(getComputedStyle(drawer).width).toBe('70px')
    fireEvent.click(button)
    expect(getComputedStyle(drawer).overflow).toBe('auto')
    expect(getComputedStyle(drawer).width).toBe('455px')
    fireEvent.click(button)
    expect(getComputedStyle(drawer).overflow).toBe('hidden')
    expect(getComputedStyle(drawer).width).toBe('70px')
  })
})
