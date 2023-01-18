import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TableToolbar } from './tableToolbar'
import { DataGridPro } from '@mui/x-data-grid-pro'
import React from 'react'

describe('TableToolbar', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<DataGridPro columns={[]} rows={[]} components={{ Toolbar: TableToolbar }} />)
    expect(baseElement).toBeTruthy()
    expect(await screen.findByTestId('table-toolbar')).toBeInTheDocument()
  })
})
